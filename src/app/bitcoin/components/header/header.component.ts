import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Input('animate') animateHeader: boolean;

    scrHeight:any;
    scrWidth:any;

    constructor() {
        this.getScreenSize();
    }

    ngOnInit(): void {
    }

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
    }

    getNavCssClass(): string {
        return this.animateHeader ? "nav-animated" : "nav";
    }

    getHeadingCssClass(): string {
        return this.animateHeader ? "heading-animated" : "heading";
    }

    getFaq(): string {
        return this.scrWidth < 200 ? "FAQ" : "Frequently Asked Questions";
    }

}
