import { MatSelectModule } from '@angular/material/select';
import { MenuComponent } from './../shared/menu/menu.component';
import { AcompanhamentoComponent } from './acompanhamento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MatCardModule } from '@angular/material/card';
import { MenuModule } from '../shared/menu/menu.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    LayoutModule,
    BrowserModule,
    CommonModule,
    MatCardModule,
    MenuModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
],
  exports: [
    AcompanhamentoComponent,
    CadastroComponent
  ],
  declarations: [AcompanhamentoComponent, CadastroComponent],
  providers: [
    MatDatepickerModule
  ]
})
export class AcompanhamentoModule { }
