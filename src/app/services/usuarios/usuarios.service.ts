import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';


const httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'DELETE, POST, GET, OPTIONS',
      'Access-Control-Allow-Headers':'Content-Type, Authorization, X-Requested-With',
    })
  };

@Injectable()
export class UsuariosService {

    constructor (
        private _httpClient: HttpClient,
    ) {

    }

     /**
     * Consultando Servicos na Servidor, retornando JSON Ge
     * @author Paulo Eduardo
     */
     consultaUsuarios(){
        return this
            ._httpClient
            .get(`http://18.228.225.102:5050/usuarios`, httpOptions)
    }

}
