import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackMessagePaymentRequestCopied} from "../snack-messages/payment-request-copied.component";
import {HttpService} from "../../../http.service";
import {PaymentService} from "../../services/payments/payment.service";

@Component({
    selector: 'app-donate-card',
    templateUrl: './donate-card.component.html',
    styleUrls: ['./donate-card.component.css']
})
export class DonateCardComponent implements OnInit {

    paymentRequest: string;
    paymentReceived: boolean;

    constructor(
        private sanitizer: DomSanitizer,
        private snackBar: MatSnackBar,
        private paymentService: PaymentService
    ) {

    }

    ngOnInit(): void {
        this.paymentRequest = this.getPaymentRequest();
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

    getPaymentRequest(): string {
        this.paymentService.createPaymentRequest()
            .subscribe(
                paymentRequest => {
                    this.paymentRequest = paymentRequest.invoice;
                    this.checkPaymentStatus();
                },
                error => {
                    console.log('error ');
                    console.log(error)
                }
            );
        return this.paymentRequest;
    }

    checkPaymentStatus(): boolean {
        this.paymentService.getPaymentStatus(this.paymentRequest)
            .subscribe(
                paymentStatus => {
                    console.log(paymentStatus);
                    this.paymentReceived = paymentStatus.ok;
                    if (!paymentStatus.ok) {
                        this.checkPaymentStatus();
                    }
                },
                error => {
                    console.log('error ');
                    console.log(error)
                }
            );
        return this.paymentReceived;
    }

    paymentRequestLink() {
        return this.sanitizer.bypassSecurityTrustUrl('lightning:' + this.paymentRequest);
    }

    newDonation() {
        this.paymentRequest = this.getPaymentRequest();
        this.paymentReceived = false;
    }

}
