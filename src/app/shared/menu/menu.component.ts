import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sistema-ivvcgrj-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  // onMenu = true
  @Input() onMenu = true;
  @ViewChild('mySidepanel') mySidepanel: ElementRef<HTMLDivElement> = {} as ElementRef;;
  @ViewChild('divElements') divElements: ElementRef<HTMLDivElement> = {} as ElementRef;;
  @ViewChild('itemColor') itemColor: ElementRef<HTMLSpanElement> = {} as ElementRef;;

  constructor(
    private router: Router
  ) {
  }
  openNav() {
    // document.getElementById("mySidepanel").style.width = "250px";
    this.mySidepanel.nativeElement.style.width = '250px'
    // this.divElements.nativeElement.style.display = 'block'
    
  }
  
  closeNav() {
    this.mySidepanel.nativeElement.style.width = '0'
    // this.divElements.nativeElement.style.display = 'none'
  }

  onLogOut() {
    this.router.navigate(['/login']);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
