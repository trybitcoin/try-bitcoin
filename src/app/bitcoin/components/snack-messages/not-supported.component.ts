import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-snack-message',
    template: '<div class="message">\n' +
        '    Coming soon ⚡\n' +
        '</div>',
    styles: ['.message {\n' +
    '    text-align: center;\n' +
    '}']
})
export class SnackMessageNotSupported implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
