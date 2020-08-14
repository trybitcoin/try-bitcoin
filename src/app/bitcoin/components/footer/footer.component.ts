import {Component, OnInit} from '@angular/core';
import {TutorialService} from "../../services/tutorial/tutorial.service";
import {Tutorial} from "../../services/tutorial/data/tutorial";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    tutorial: Tutorial;

    constructor(private tutorialService: TutorialService) {
    }

    ngOnInit(): void {
        this.tutorialService.startTutorial()
            .subscribe(
                response => {
                    console.log(response);
                    this.tutorial = response;
                },
                error => {
                    console.log('error ');
                    console.log(error)
                }
            );
    }

}
