import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sistema-ivvcgrj-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.scss']
})
export class AcompanhamentoComponent {
  hide = false;
  constructor(
    private router: Router
  ) {
  }

  cadastrar() {
    this.router.navigate(['/cadastro']);

  }
}
