import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-snack-message',
    template: '<div class="message">\n' +
        '    Copied to clipboard ⚡\n' +
        '</div>',
    styles: ['.message {\n' +
    '    text-align: center;\n' +
    '}']
})
export class SnackMessageCopied implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
