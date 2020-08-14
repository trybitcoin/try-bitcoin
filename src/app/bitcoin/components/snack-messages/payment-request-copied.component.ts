import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-snack-message',
    template: '<div class="message">\n' +
        '    Payment request copied to clipboard ⚡\n' +
        '</div>',
    styles: ['.message {\n' +
    '    text-align: center;\n' +
    '}']
})
export class SnackMessagePaymentRequestCopied implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
