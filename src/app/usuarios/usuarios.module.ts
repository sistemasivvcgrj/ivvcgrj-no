import { NovoUsuarioComponent } from './novo-cadastro/novo-usuario.component';
import { CalendarioModule } from './../shared/calendario/calendario.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeaderModule } from '../shared/header/header.module';
import { ConsultaUsuariosComponent } from './consulta/consulta.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { UsuariosComponent } from './usuarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuariosComponent } from './cadastro/cadastro.component';
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
import { MatTableModule } from '@angular/material/table'



@NgModule({
  imports: [
    BrowserAnimationsModule,
    LayoutModule,
    BrowserModule,
    CommonModule,
    MatCardModule,
    MenuModule,
    HeaderModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    ReactiveFormsModule,
    CalendarioModule
],
  exports: [
    UsuariosComponent,
    CadastroUsuariosComponent,
    ConsultaUsuariosComponent,
    NovoUsuarioComponent
  ],
  declarations: [UsuariosComponent, CadastroUsuariosComponent, ConsultaUsuariosComponent, NovoUsuarioComponent],
  providers: [
    MatDatepickerModule
  ]
})
export class UsuariosModule { }
