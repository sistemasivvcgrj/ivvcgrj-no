import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sistema-ivvcgrj-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() titulo= '';
  @Input() logo= '';
  @Input() bullet= false;

}
