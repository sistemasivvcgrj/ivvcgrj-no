import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sistema-ivvcgrj-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  hide = false;
  constructor(
    private router: Router
  ) {
  }

  cadastrar() {
    this.router.navigate(['/cadastro-usuarios']);

  }

  consultar() {
    this.router.navigate(['/consulta-usuarios']);

  }
}
