import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sistema-ivvcgrj-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  hide = false;

  public formulario: FormGroup = new FormGroup({
    'tipo' : new FormControl(null, [Validators.required]),
    'nome': new FormControl(null,[ Validators.required,Validators.minLength(5),Validators.maxLength(150)]),
    'telefone': new FormControl(null, [ Validators.required,Validators.minLength(5),Validators.maxLength(550)]),
    'data': new FormControl(null, [ Validators.required,Validators.minLength(1),Validators.maxLength(550)]),
    'convidado': new FormControl(null, [ Validators.required,Validators.minLength(0),Validators.maxLength(50)])
  
  });

  incluir ():void {
  if (this.formulario.valid) {
    console.log(this.formulario);
  }
 }
}
