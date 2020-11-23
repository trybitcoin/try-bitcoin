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
        {
            title: 'How do I store Bitcoin?',
            content: 'One of the most common beginner mistakes is to leave bitcoins on an exchange after buying them. ' +
                'There have been multiple exchange hacks in the past and people have lost large amounts of money. ' +
                'If you have bitcoins on an exchange you dont really possess bitcoin. ' +
                'You should learn enough to get these bitcoins of the exchange and ' +
                'into a wallet you control.'
        },
        {
            title: 'Should I buy Alternative Crypto Currencies?',
            content: 'There are currently over 2000 alternative crypto currencies called Altcoins. ' +
                'Most of them are down right scams, created to enrich the founders by tricking unexperienced users into buying them. ' +
                'It can be tempting to get involved with these projects because they use marketing buzz words like smart contracts or decentralised finance ' +
                'and they look cheap compared to Bitcoin. ' +
                'They strongly rely on marketing to stay relevant and they are most of the time not honest about the technical trade-offs they are making.'
        },
        {
            title: 'How do I get help?',
            content: 'There is a huge Bitcoin community on the internet that is ready to help. ' +
                'They share videos & tutorials and communicate through online forums and telegram groups. ' +
                'Be careful though! There are scammer and thieves out there trying to steal your bitcoin. ' +
                'A common approach to interact with the online Bitcoin community is to create an online persona completely separate from your real world identity. ' +
                'The safest way to get help is to ask around in your friends and family circle. There are more Bitcoiners out there than you think.'
        }

    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
