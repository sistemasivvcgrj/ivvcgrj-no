import { CalendarioModule } from './shared/calendario/calendario.module';
import { CalendarioComponent } from './shared/calendario/calendario.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { HeaderComponent } from './shared/header/header.component';
import { ConsultaComponent } from './acolhedores/consulta/consulta.component';
import { AcolhedoresModule } from './acolhedores/acolhedores.module';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { CadastroComponent } from './acolhedores/cadastro/cadastro.component';
import { CadastroUsuariosComponent } from './usuarios/cadastro/cadastro.component';
import { ConsultaUsuariosComponent } from './usuarios/consulta/consulta.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from "@angular/forms";
import {MatMenuModule} from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table'
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {LocationStrategy, HashLocationStrategy, PathLocationStrategy} from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxCurrencyModule } from "ngx-currency";
import { MenuModule } from './shared/menu/menu.module';
import { HeaderModule } from './shared/header/header.module';
import { AcolhedoresComponent } from './acolhedores/acolhedores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NovoUsuarioComponent } from './usuarios/novo-cadastro/novo-usuario.component';

registerLocaleData(ptBr);

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: 'acolhedores', component: AcolhedoresComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'cadastro-usuarios', component: CadastroUsuariosComponent },
  { path: 'consulta-usuarios', component: ConsultaUsuariosComponent },
  { path: 'novo-usuario', component: NovoUsuarioComponent },
  { path: 'calendario', component: CalendarioComponent },
  {path: '', component: LoginComponent,},
];


@NgModule({
  declarations: [	
    AppComponent,
    NxWelcomeComponent, 
    LoginComponent, 
    NavigationComponent
   ],
  imports: [
    BrowserAnimationsModule,
    LayoutModule,
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSnackBarModule,
    NgxCurrencyModule,
    MatSelectModule,
    ReactiveFormsModule,
    AcolhedoresModule,
    UsuariosModule,
    MenuModule,
    HeaderModule,
    CalendarioModule,
    [RouterModule.forRoot(routes,
      {enableTracing: true}
      )],
  ],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
