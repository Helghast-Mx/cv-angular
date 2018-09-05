import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { CurriculumService } from '../../services/curriculum.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public _serviceAbout : InfoPaginaService,
              public _infoPrinciServ : CurriculumService) { }

  ngOnInit() {
  }

}
