import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { CurriculumService } from '../../services/curriculum.service';
import { InfoPri } from '../../interfaces/infoPrinci.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

indx: InfoPri [] =   [];
cargada = false;
  constructor(public _serviceAbout : InfoPaginaService,
              public _infoPrinciServ : CurriculumService) { 
                
              }

  ngOnInit() {
    this._infoPrinciServ.getIndice()
    .subscribe((titulos:InfoPri[]) => {
      this.indx = titulos
      console.log(this.indx);
    this.cargada= true;  
    })
    
  }

}
