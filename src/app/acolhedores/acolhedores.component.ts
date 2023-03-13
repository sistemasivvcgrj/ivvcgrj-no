import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sistema-ivvcgrj-acompanhamento',
  templateUrl: './acolhedores.component.html',
  styleUrls: ['./acolhedores.component.scss']
})
export class AcolhedoresComponent {
  hide = false;
  constructor(
    private router: Router
  ) {
  }

  cadastrar() {
    this.router.navigate(['/cadastro']);

  }

  consultar() {
    this.router.navigate(['/consulta']);

  }
}
