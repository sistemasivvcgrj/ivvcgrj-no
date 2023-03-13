import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './calendario.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CalendarioComponent
  ],
  declarations: [CalendarioComponent]
})
export class CalendarioModule { }
