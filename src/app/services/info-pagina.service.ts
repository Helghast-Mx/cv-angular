import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {


  info:infoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) { 
    console.log('Servicio Listo');
    // Leer archivos JSON

    this.http.get('assets/data/data-pagina.json')// Esto es simplemente la definicion de donde esta nuestra informacion pero no la va a ejecutar hasta que no mire un subscribe en ella
    .subscribe( (resp:infoPagina) =>{

      this.info = resp;
      this.cargada = true;

      console.log(resp);
      // .subscribe((resp:any)=>{})
      // console.log(resp.facebook);
    } )
  }
}
