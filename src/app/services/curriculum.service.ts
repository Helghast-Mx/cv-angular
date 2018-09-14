import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPri } from '../interfaces/infoPrinci.interface';
import { ExprienceInte } from '../interfaces/experience.interface';
// import { lenguajes } from '../interfaces/lenguajes.interface';
import { eduIntf, CursoInt } from '../interfaces/educacion.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  datosPrincipales: any [] = []; 
  cargada =false;
  queryBase:string = 'https://angular-portafolio-885e3.firebaseio.com/';
  datosPersonales : any [] = [];
  datosHome: any [] = [];
  educacion: any [] = [];
  experiencia: ExprienceInte [] = [];
  lenguajes:any [] = [];
  datosEdu:eduIntf [] = [];
  constructor(public http:HttpClient) {
    this.getIndice();
    this.getDatosPersonales();
    this.getDescripcion();
    this.getExperiencia();
    this.getLenguajes();
    this.getEscolaridad();
    this.getCursos();
   }

   getCursos(){
     return this.http.get(`${this.queryBase}CV/ExpCursos.json`)
   }

    getIndice ( ) {

     return this.http.get(`${this.queryBase}curriculum_idx.json`)
     
    } 

    getEscolaridad () {
    this.http.get(`${this.queryBase}CV/Educacion.json`)
    .subscribe(  (datosEduc : eduIntf[]) =>{
      this.datosEdu = datosEduc; 
      
    } )
    }

    getDatosPersonales(  ){
      this.http.get( `${this.queryBase}CV/DatosPersonales.json` )
      .subscribe( (resp:any[])=>{

this.datosPersonales = resp;
// console.log(this.datosPersonales);
      } )
    }

    getDescripcion (){
     return this.http.get(`${this.queryBase}CV/Descripcion.json`)
      // .subscribe( (resp:any[]) =>{
      //   this.datosHome= resp;
      //   // console.log(resp);
      // } )
    }

    getEducacion( ){
      return this.http.get(`${this.queryBase}CV/Educacion.json`)
//       .subscribe ( (resp:any[])=>{
// this.educacion = resp;
//       } )
    }

    getExperiencia(){
      this.http.get(`${this.queryBase}CV/Experiencia.json`)
      .subscribe( (resp:ExprienceInte[])=> {
        this.experiencia = resp;
      } )
    }

    getLenguajes(){
      return this.http.get (`${this.queryBase}/CV/Software.json`);
     
// // this.http.get(`${this.queryBase}CV/Software/0.json`)
// //       .subscribe( (resp:lenguajes[])=>{
// //         this.lenguajes = resp;
        
//       } )
    }
    
     }
