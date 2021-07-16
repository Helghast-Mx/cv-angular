import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';
import { fireDatos } from '../interfaces/about-fireBase.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info:infoPagina = {};
  cargada = false;
  equipo:fireDatos [] = [];
  queryBase:string = "https://angular-portafolio-885e3.firebaseio.com/";
  queryBaseEnglish:string = "https://cv-english-angular-default-rtdb.firebaseio.com/"
  changeLenguaje : boolean = false;
  constructor(private http: HttpClient) { 

    this.cargarInfo()
    this.cargarEquipo();
    this.getInfoPersonal();
    this.getIdiomas();
  }
  
  private cargarInfo ()  {
    this.http.get('assets/data/data-pagina.json')// Esto es simplemente la definicion de donde esta nuestra informacion pero no la va a ejecutar hasta que no mire un subscribe en ella
    .subscribe( (resp:infoPagina) =>{
      this.info = resp;
      this.cargada = true;
      // .subscribe((resp:any)=>{})
      // console.log(resp.facebook);
    } )
  }
  cargarEquipo ( ) {
    if(!this.changeLenguaje){

      this.http.get(`${ this.queryBase }equipo.json`)
      .subscribe( (resp:any) =>{
        this.equipo = resp;
        this.cargada = true;
      } )
    } else {
      this.http.get(`${ this.queryBaseEnglish }equipo.json`)
      .subscribe( (resp:any) =>{
        this.equipo = resp;
        this.cargada = true;
      } )
    }
  }

  getInfoPersonal (){

    return this.http.get(`${this.queryBase}CV/DatosPersonales.json`)
  }

  getIdiomas(){
  return  this.http.get(`${this.queryBase}CV/Idiomas.json`)
  }

}
