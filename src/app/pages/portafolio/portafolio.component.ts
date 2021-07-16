import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { CurriculumService } from '../../services/curriculum.service';

interface MenuItem {
  texto : string,
  ruta : string,
  categoria ?: string;
  cod       ?: string;
  titulo    ?: string;
  url       ?: string;
  
}

export interface Portafolio {
  categoria: string;
  cod:       string;
  titulo:    string;
  url:       string;
}

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  encabezadosMenu : MenuItem [] = [
    {
      texto: 'About',
      ruta : '/about'
    },
    {
      texto: 'Experiencia',
      ruta : '/experiencia'
    },
    {
      texto: 'Educacion',
      ruta : '/educacion'
    },
    {
      texto: 'Software',
      ruta : '/software'
    },
    {
      texto: 'Indice',
      ruta : '/indice'
    },
    {
      texto: 'Educacion',
      ruta : '/educacion'
    },
    
  ]

indx  : Portafolio ;
cargada = false;
idiomas:any = {} || undefined;

img:string = 'assets/curriculum/project-'
  constructor(private _serviceAbout : InfoPaginaService,
              private _cvService : CurriculumService) {
               
                this._serviceAbout.getIdiomas()
                .subscribe(  (data:any) =>{
                this.idiomas=data;
                 
                })
}

  cargaInformacion (){
    // this._cvService.getIndice()
    // .subscribe( (titulos:any)=> {
    //   this.indx = titulos
    //   console.log(  ` titulos `, titulos )
    //   this.cargada = true;
   
    // } )
    // this._serviceAbout.getIdiomas()
    //            .subscribe(  (data:any) =>{
    //            this.idiomas=data;
    //            this.cargada = true;  
    //            })
  }

  ngOnInit() {
      // this._cvService.getIndice()
      // .subscribe( (titulos:any)=> {
      //   this.indx = titulos
      //   console.log(  ` titulos `, this.indx )
      //   setTimeout(() => {
          
      //     this.cargada = true;
      //   }, 3000);
      // } )
      
     return new Promise( (resolve, reject) =>{
       this._cvService.getIndice()
       .subscribe((titulos:any) => {
         this.indx = titulos
  
       this.cargada= true;  
       resolve();

     } )
     })
    
    
  }

}
