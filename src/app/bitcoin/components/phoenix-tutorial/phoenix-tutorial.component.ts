import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {PaymentService} from "../../services/payments/payment.service";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {TutorialVideoComponent} from "./content/tutorial-video/tutorial-video.component";

@Component({
    selector: 'app-phoenix-tutorial',
    templateUrl: './phoenix-tutorial.component.html',
    styleUrls: ['./phoenix-tutorial.component.css']
})
export class PhoenixTutorialComponent implements OnInit {

    selected = new FormControl(0);

    downloadLinkClicked = false;
    withdrawSuccessful = false;

    paymentRequest;
    paymentReceived;

    tabs = [
        {name: 'Intro', title: 'What is Bitcoin?'},
        {name: 'Wallet', title: 'What is a Bitcoin wallet?'},
        {name: 'Install', title: 'Install Phoenix Wallet'},
        {name: 'Receive', title: 'Receive a Payment'},
        {name: 'Send', title: 'Send a Payment'}
    ];

    constructor(private paymentService: PaymentService,
                private _bottomSheet: MatBottomSheet) {
    }

    ngOnInit(): void {

    }


    back() {
        if (this.selected.value > 0) {
            this.selected.setValue(this.selected.value - 1);
        }
    }

    next() {
        if (this.selected.value < this.tabs.length) {
            this.selected.setValue(this.selected.value + 1);
        }
    }

    isTabDisabled(tabIndex: number) {
        if (tabIndex == 3 && this.selected.value === 2) {
            return !this.downloadLinkClicked;
        }
        if (tabIndex == 4 && this.selected.value === 3) {
            return !this.withdrawSuccessful;
        }
        return tabIndex > this.selected.value + 1;
    }

    isBackDisabled() {
        return this.selected.value == 0;
    }

    isNextDisabled() {
        const isLastStep = this.selected.value == this.tabs.length - 1;
        return this.isReceiveStepNextButNotDownloaded() || this.isSendStepNextButNotWithdrawn() || isLastStep;
    }

    private isReceiveStepNextButNotDownloaded(): boolean {
        return this.selected.value === 2 && !this.downloadLinkClicked;
    }

    private isSendStepNextButNotWithdrawn(): boolean {
        return this.selected.value === 3 && !this.withdrawSuccessful;
    }

    getCheckBoxContent(index: number) {
        if(this.paymentReceived){
            return "✔";
        }
        if(index === this.selected.value){
            return "";
        }
        return this.isStepDone(index) ? "✔" : " ►";
    }

    isStepDone(index: number) {
        return index < this.selected.value;
    }

    onDownloadLinkClicked() {
        this.downloadLinkClicked = true;
    }

    onWithdrawSuccessful() {
        this.withdrawSuccessful = true;
        this.paymentRequest = this.getPaymentRequest();
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

    openBottomSheet(): void {
        this._bottomSheet.open(TutorialVideoComponent, {closeOnNavigation: true});
    }

    getTabClass(i: number) {
        return this.isTabDisabled(i) ? "" : "black";
    }

    getTabIconClass(i: number) {
        return this.isTabDisabled(i) || i === this.selected.value + 1  ? "tab-icon" : "tab-icon orange";
    }
}
