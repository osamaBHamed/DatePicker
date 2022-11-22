import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FormsModule } from '@angular/forms';
import { MwlFlatpickrDirective } from './mwl-flatpickr.directive';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    DateRangeComponent,
    MwlFlatpickrDirective,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlatpickrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
