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
  changeLenguaje : boolean = false;
  queryBaseSpan:string = 'https://angular-portafolio-885e3.firebaseio.com/';
  queryBaseEnglish : string = 'https://cv-english-angular-default-rtdb.firebaseio.com/';
  datosPersonales : any [] = [];
  datosHome: any [] = [];
  educacion: any [] = [];
  experiencia: ExprienceInte [] = [];
  lenguajes:any [] = [];
  datosEdu:eduIntf [] = [];
  indiceFiltrado : any [] = [];
  constructor(public http:HttpClient) {
   this.getExperiencia()
   }

   getCursos(){
     if(!this.changeLenguaje){
       return this.http.get(`${this.queryBaseSpan}CV/ExpCursos.json`)
       
     }else{
      return this.http.get(`${this.queryBaseEnglish}CV/ExpCursos.json`)
     }
   }

    getIndice ( ) {
     if(!this.changeLenguaje){
       return this.http.get(`${this.queryBaseSpan}curriculum_idx.json`)
       
      } else{
        return this.http.get(`${this.queryBaseEnglish}curriculum_idx.json`)
        
     }
     
    } 

    getEscolaridad () {
    if(!this.changeLenguaje){

      this.http.get(`${this.queryBaseSpan}CV/Educacion.json`)
      .subscribe(  (datosEduc : eduIntf[]) =>{
        this.datosEdu = datosEduc; 
      } )
    } else {
      
      this.http.get(`${this.queryBaseEnglish}CV/Educacion.json`)
      .subscribe(  (datosEduc : eduIntf[]) =>{
        this.datosEdu = datosEduc; 
      } )
    }
    }

    getDatosPersonales(  ){
      if(!this.changeLenguaje){

        this.http.get( `${this.queryBaseSpan}CV/DatosPersonales.json` )
        .subscribe( (resp:any[])=>{
        this.datosPersonales = resp;
        } )
      }else {
        this.http.get( `${this.queryBaseEnglish}CV/DatosPersonales.json` )
        .subscribe( (resp:any[])=>{
        this.datosPersonales = resp;
        } )
      }
    }

    getDescripcion (){
      if(!this.changeLenguaje){

        return this.http.get(`${this.queryBaseSpan}CV/Descripcion.json`)
      }else{
        return this.http.get(`${this.queryBaseEnglish}CV/Descripcion.json`)
      }
      // .subscribe( (resp:any[]) =>{
      //   this.datosHome= resp;
      //   // console.log(resp);
      // } )
    }

    getEducacion( ){
      if(!this.changeLenguaje){
        return this.http.get(`${this.queryBaseSpan}CV/Educacion.json`)
      } else {
        return this.http.get(`${this.queryBaseEnglish}CV/Educacion.json`)
      }
//       .subscribe ( (resp:any[])=>{
// this.educacion = resp;
//       } )
    }

    getExperiencia(){
      if(!this.changeLenguaje){

        this.http.get(`${this.queryBaseSpan}CV/Experiencia.json`)
        .subscribe( (resp:ExprienceInte[])=> {
          this.experiencia = resp;
        } )
      } else {
        this.http.get(`${this.queryBaseEnglish}CV/Experiencia.json`)
        .subscribe( (resp:ExprienceInte[])=> {
          this.experiencia = resp;
        } )
      }
    }

    getLenguajes(){
      if(!this.changeLenguaje){
      
        return this.http.get (`${this.queryBaseSpan}/CV/Software.json`);
      } else {
        return this.http.get (`${this.queryBaseEnglish}/CV/Software.json`);

      }

     
// // this.http.get(`${this.queryBaseSpan}CV/Software/0.json`)
// //       .subscribe( (resp:lenguajes[])=>{
// //         this.lenguajes = resp;
        
//       } )
    }
    
     }
