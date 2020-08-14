import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tips',
    templateUrl: './tips.component.html',
    styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

    tips = [
        {
            title: 'Alternative Crypto Currencies',
            content: 'There are currently over 2000 alternative crypto currencies called Altcoins. ' +
                'Most of them are down right scams, created to enrich the founders by tricking unexperienced users into buying them. ' +
                'It can be tempting to get involved with these projects because they use marketing buzz words like smart contracts or decentralised finance ' +
                'and they look cheap compared to Bitcoin. ' +
                'They strongly rely on marketing to stay relevant and they are most of the time not honest about the technical trade-offs they are making.'
        },
        {
            title: 'Buying Bitcoin',
            content: '...'
        },
        {
            title: 'Dollar Cost Averaging',
            content: '...'
        },
        {
            title: 'Storing Bitcoin',
            content: 'One of the most common beginner mistakes is to leave bitcoins on an exchange after buying them. ' +
                'There have been multiple exchange hacks in the past and people have lost large amounts of money. ' +
                'If you have bitcoins on an exchange you dont really possess bitcoin. ' +
                'You should learn enough to get these bitcoins of the exchange and ' +
                'into a wallet you control.'
        },
        {
            title: 'Bitcoin Privacy',
            content: '...'
        },
        {
            title: 'Getting Help',
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
