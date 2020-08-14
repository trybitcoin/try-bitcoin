import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LnUrlService} from "../../../../services/payments/lnurl.service";
import {TutorialService} from "../../../../services/tutorial/tutorial.service";
import {PaymentService} from "../../../../services/payments/payment.service";

@Component({
    selector: 'app-receive-step',
    templateUrl: './receive-step.component.html',
    styleUrls: ['./receive-step.component.css']
})
export class ReceiveStepComponent implements OnInit {


    @Output() withdrawSuccessful = new EventEmitter();

    paymentReceived: boolean;
    questionsAnswered: boolean;

    lnUrl: string;

    seedAnswer: string;
    seedQuestion: string[] = ['12 words', '24 words'];

    constructor(
        private sanitizer: DomSanitizer,
        private snackBar: MatSnackBar,
        private lnUrlService: LnUrlService,
        private tutorialService: TutorialService,
        private paymentService: PaymentService
    ) {

    }

    ngOnInit(): void {
    }

    submitCaptcha(captcha: any) {
        const captchaValue = captcha.code;
        console.log(captchaValue)
        if (this.seedAnswer === this.seedQuestion[0]) {
            this.tutorialService.solveCaptcha(captchaValue).subscribe(
                tutorialSession => {
                    if (tutorialSession.reservedAmount > 0) {
                        const sessionId = tutorialSession.sessionId;
                        this.lnUrl = this.createLnUrl(sessionId);
                        this.questionsAnswered = true;
                        this.checkWithdrawStatus(sessionId);
                    } else {
                        console.log('captcha value' + captchaValue + ' wrong.');
                    }
                },
                error => {
                    console.log('error ');
                    console.log(error)
                }
            );
        }
    }


    createLnUrl(withdrawId: string): string {
        return this.lnUrlService.createLnUrl(withdrawId);
    }

    withdrawRequestLink() {
        return this.sanitizer.bypassSecurityTrustUrl(this.lnUrl);
    }

    private checkWithdrawStatus(sessionId: string) {
        this.paymentService.getWithdrawStatus(sessionId).subscribe(
            withdrawStatus => {
                console.log(withdrawStatus);
                if (withdrawStatus.ok) {
                    this.paymentReceived = true;
                    this.withdrawSuccessful.emit();
                } else {
                    this.checkWithdrawStatus(sessionId);
                }
            },
            error => {
                console.log('check withdraw status error');
                console.log(error)
            }
        );
    }
}
