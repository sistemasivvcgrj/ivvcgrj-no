import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sistema-ivvcgrj-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  onMenu = true
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
    this.itemColor.nativeElement.style.color = 'white'
    
  }
  
  closeNav() {
    this.mySidepanel.nativeElement.style.width = '0'
    // this.divElements.nativeElement.style.display = 'none'
    this.itemColor.nativeElement.style.color = '#111'
  }

  onLogOut() {
    this.router.navigate(['/login']);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
