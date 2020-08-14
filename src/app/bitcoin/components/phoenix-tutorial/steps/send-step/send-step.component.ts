import {Component, Input, OnInit} from '@angular/core';
import {PaymentService} from "../../../../services/payments/payment.service";
import {DomSanitizer} from "@angular/platform-browser";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackMessagePaymentRequestCopied} from "../../../snack-messages/payment-request-copied.component";

@Component({
    selector: 'app-send-step',
    templateUrl: './send-step.component.html',
    styleUrls: ['./send-step.component.css']
})
export class SendStepComponent implements OnInit {

    @Input() paymentRequest: string;
    @Input() paymentReceived: boolean;

    constructor(private paymentService: PaymentService,
                private sanitizer: DomSanitizer,
                private snackBar: MatSnackBar,
    ) {
    }

    ngOnInit(): void {
    }


    paymentRequestLink() {
        return this.sanitizer.bypassSecurityTrustUrl('lightning:' + this.paymentRequest);
    }

    copyPaymentRequest() {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.paymentRequest
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.snackBar.openFromComponent(SnackMessagePaymentRequestCopied, {
            duration: 2000,
        });
    }
}
