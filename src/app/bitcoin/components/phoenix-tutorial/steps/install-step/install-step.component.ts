import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackMessageNotSupported} from "../../../snack-messages/not-supported.component";
import {DomSanitizer} from "@angular/platform-browser";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {TutorialVideoComponent} from "../../content/tutorial-video/tutorial-video.component";

@Component({
    selector: 'app-install-step',
    templateUrl: './install-step.component.html',
    styleUrls: ['./install-step.component.css']
})
export class InstallStepComponent implements OnInit {

    @Output() downloaded = new EventEmitter();

    constructor(
        private sanitizer: DomSanitizer,
        private snackBar: MatSnackBar
    ) {
    }

    ngOnInit(): void {
    }

    onClickIOS() {
        this.downloaded.emit();
        this.snackBar.openFromComponent(SnackMessageNotSupported, {
            duration: 2000,
        });
    }

    onClickAndroid() {
        this.downloaded.emit();
    }

    getPlayStoreLink() {
        const userAgent = navigator.userAgent.toLowerCase();
        const appId = 'fr.acinq.phoenix.mainnet&hl=en_US';
        const link = userAgent.search('android') > -1 ? 'market://details?id=' + appId : 'https://play.google.com/store/apps/details?id=' + appId;
        return this.sanitizer.bypassSecurityTrustUrl(link);
    }

}
