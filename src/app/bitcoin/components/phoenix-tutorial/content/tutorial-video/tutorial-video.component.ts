import {Component, OnInit} from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
    selector: 'app-tutorial-video',
    templateUrl: './tutorial-video.component.html',
    styleUrls: ['./tutorial-video.component.css']
})
export class TutorialVideoComponent implements OnInit {

    constructor(private _bottomSheetRef: MatBottomSheetRef<TutorialVideoComponent>) {
    }

    ngOnInit(): void {
    }

    close() {
        this._bottomSheetRef.dismiss();
    }
}
