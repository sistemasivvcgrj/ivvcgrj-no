import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'sistema-ivvcgrj-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private router: Router
  ) {
  }
  hide = true;

  onClick() {
    this.router.navigate(['/acompanhamento']);
  }

}

