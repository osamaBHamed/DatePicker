import { Component } from '@angular/core';
import { FlatpickrDefaultsInterface } from '../FlatpickrDefaults';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  dateTimeValue: Date = new Date();
  options: FlatpickrDefaultsInterface = {
          altFormat: 'd/m/Y',   // will be ignored since altFormat is provided via specific attribute
          altInput: true        // will be used since specific attribute is not provided
     };
     timePicker: Date | null = null;
}
