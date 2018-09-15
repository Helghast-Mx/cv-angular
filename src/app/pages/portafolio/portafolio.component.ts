import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { CurriculumService } from '../../services/curriculum.service';
import { InfoPri } from '../../interfaces/infoPrinci.interface';
import { InglesInter } from '../../interfaces/lenguajes.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

indx  =   {};
cargada = false;
idiomas:any = {};
  constructor(public _serviceAbout : InfoPaginaService,
              public _infoPrinciServ : CurriculumService) { 
                this._serviceAbout.getIdiomas()
    .subscribe(  (data:any) =>{
this.idiomas=data;

    })

    
              }

  ngOnInit() {
    return new Promise( (resolve, reject) =>{
      this._infoPrinciServ.getIndice()
      .subscribe((titulos:any) => {
        this.indx = titulos
  
      this.cargada= true;  
      resolve();

    } )
    })
    
    
  }

}
