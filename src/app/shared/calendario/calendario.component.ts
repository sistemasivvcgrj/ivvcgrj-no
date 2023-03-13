import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'sistema-ivvcgrj-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {
  declare  calendarJs: any;
  ngOnInit() {
    // let calendarInstance = new calendarJs( "myCalendar", {})  
    console.log('teste');  
  }

}
