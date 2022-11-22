import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateRangeComponent } from './date-range/date-range.component';
import { DateComponent } from './date/date.component';

const routes: Routes = [
  {path:'',component:DateRangeComponent},
  {path:'date',component:DateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
