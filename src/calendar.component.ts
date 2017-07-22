import {AfterViewInit, Component, ElementRef, Input} from '@angular/core';
import * as jqueryProxy from 'jquery';
import 'fullcalendar';
import {Options} from 'fullcalendar';

const jquery: JQueryStatic = (<any>jqueryProxy).default || jqueryProxy;

@Component({
    selector: 'calendar-component',
    template: '<div></div>'
})
export class CalendarComponent implements AfterViewInit {

    @Input() options: Options;

    constructor(private element: ElementRef) {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            jquery('calendar-component').fullCalendar(this.options);
        }, 100);
    }

    fullCalendar(...args: any[]) {
        return jquery(this.element.nativeElement).fullCalendar(args[0]);
    }
}
