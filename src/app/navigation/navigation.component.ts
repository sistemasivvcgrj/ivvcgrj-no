import { NavigationEnd, NavigationStart, Router, } from '@angular/router';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'sistema-ivvcgrj-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = `Bem Vindo!`;

  onMenu = true

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    const path = window.location.hash;
    console.log('PATH-',path);
    if (path === '#/login' || path ==='#/') {
      this.onMenu = false
    }
    else {
      this.onMenu = true;
    }
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
