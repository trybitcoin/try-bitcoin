import {Component, OnInit} from '@angular/core';
import {TutorialService} from "../../services/tutorial/tutorial.service";
import {Statistics} from "../../services/tutorial/data/statistics";

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

    stats: Statistics;

    constructor(private tutorialService: TutorialService) {
    }

    ngOnInit(): void {
        this.fetchStatistics();
    }

    private fetchStatistics() {
        this.tutorialService.getStatistics()
            .subscribe(
                stats => {
                    console.log(stats);
                    this.stats = stats;
                },
                error => {
                    console.log('error ');
                    console.log(error)
                }
            );
    }

    refresh() {
        this.fetchStatistics();
    }
}
