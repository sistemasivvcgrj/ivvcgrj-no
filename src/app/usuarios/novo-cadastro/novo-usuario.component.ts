import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sistema-ivvcgrj-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent {
  hide = false;

  public formulario: FormGroup = new FormGroup({
    'tipo' : new FormControl(null, [Validators.required]),
    'nome': new FormControl(null,[ Validators.required,Validators.minLength(5),Validators.maxLength(150)]),
    'cpf': new FormControl(null,[ Validators.required,Validators.minLength(5),Validators.maxLength(150)]),
    'telefone': new FormControl(null, [ Validators.required,Validators.minLength(5),Validators.maxLength(550)]),
    'departamento': new FormControl(null, [ Validators.required,Validators.minLength(1),Validators.maxLength(550)]),
    'funcao': new FormControl(null, [ Validators.required,Validators.minLength(1),Validators.maxLength(550)]),
    'email': new FormControl(null, [ Validators.required,Validators.minLength(1),Validators.maxLength(550)]),
    'senha': new FormControl(null, [ Validators.required,Validators.minLength(1),Validators.maxLength(550)]),  
    'discipulado': new FormControl(null, [ Validators.required,Validators.minLength(1),Validators.maxLength(550)]),  
    'rhema': new FormControl(null, [ Validators.required,Validators.minLength(1),Validators.maxLength(550)]),  
  });

  incluir ():void {
  if (this.formulario.valid) {
    console.log(this.formulario);
  }
 }
}