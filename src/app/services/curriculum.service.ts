import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPri } from '../interfaces/infoPrinci.interface';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  datosPrincipales: InfoPri [] = []; 
  cargada =false;
  constructor(private http:HttpClient) {
    this.cargarDatos();
   }


  private cargarDatos ( ) {
    this.http.get('https://angular-portafolio-885e3.firebaseio.com/curriculum_idx.json')
    .subscribe( (resp:any) =>{

      this.datosPrincipales = resp;
      console.log(this.datosPrincipales);
      this.cargada = true;

      
      
    } )
  }
}
