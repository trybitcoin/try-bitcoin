import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackMessageCopied} from "../../components/snack-messages/snack-message-copy.component";
import {NodeInfoService} from "../../services/node-info/node-info.service";

@Component({
    selector: 'app-donate',
    templateUrl: './node-info.component.html',
    styleUrls: ['./node-info.component.css']
})
export class NodeInfoComponent implements OnInit {
    alias: string;
    address: string;
    pubKey: string;

    payments: number;
    valueInSats: number;

    dailyFees: number;
    weeklyFees: number;
    monthlyFees: number;

    constructor(
        private service: NodeInfoService,
        private snackBar: MatSnackBar,
    ) {

    }

    refresh() {
        this.fetchNodeInfo();
    }

    ngOnInit(): void {
        this.fetchNodeInfo();
    }

    private fetchNodeInfo() {
        this.service.getNodeInfo()
            .subscribe(
                node => {
                    console.log(node);
                    this.alias = node.alias;
                    this.address = node.address;
                    this.pubKey = node.pubKey;
                    this.payments = node.numberOfPayments;
                    this.valueInSats = node.numberOfSatsReceived;
                    this.dailyFees = node.feesDailyInSats;
                    this.weeklyFees = node.feesWeeklyInSats;
                    this.monthlyFees = node.feesMonthlyInSats;
                },
                error => {
                    console.log('error ');
                    console.log(error)
                }
            );
    }

    copyConnectionString() {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.pubKey + "@" + this.address
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.snackBar.openFromComponent(SnackMessageCopied, {
            duration: 2000,
        });
    }
}
