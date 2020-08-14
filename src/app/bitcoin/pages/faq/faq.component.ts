import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

    questions = [
        {
            title: 'Who controls Bitcoin?',
            content: 'There is no central authority in charge of Bitcoin. There is no CEO, no board of directors and no controlling company.'
        },
        {
            title: 'Why is Bitcoin volatile?',
            content: 'Since its creating in 2009 Bitcoin has experienced tremendous volatility. The Bitcoin price is determined by buyers and sellers.'
        },
        {
            title: 'What backs Bitcoins value?',
            content: 'People'
        },
        {
            title: 'How can I trust Bitcoin?',
            content: 'Open Source.'
        },
        {
            title: 'Is Bitcoin reliable?',
            content: '99,93% Uptime.'
        },
        {
            title: 'Do criminals use Bitcoin?',
            content: 'Yes, Bitcoin is money and money is used by criminals.'
        },
        {
            title: 'Is Bitcoin a Ponzi scheme?',
            content: 'Yes'
        },
        {
            title: 'Is Bitcoin a bubble?',
            content: 'No'
        },
        {
            title: 'Can governments stop Bitcoin?',
            content: 'No, Bitcoin like the internet operates globally in a decentralized way and has no single point of failure. ' +
                'Governments can only make Bitcoin illegal in their jurisdiction. In fact China has already done so multiple times. ' +
                'Yet Bitcoin continued to work, even in China. ' +
                'Bitcoins distributed nature means that it would require a monumental co-ordinated attack from many world powers to stem Bitcoins grows. ' +
                'Even such a unrealistic scenario would be unlikely to succeed in the long term. ' +
                'Bitcoin is an idea whose time has come.'
        },
        {
            title: 'Does Bitcoin waste energy?',
            content: 'It is true that the Bitcoin Netowrk consumes a lot of electricity but spending energy to secure and operate a global payments network that provides'
        },

    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
