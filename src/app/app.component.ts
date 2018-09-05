import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { CurriculumService } from './services/curriculum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _infoPagina:InfoPaginaService,
              public _infoCV:CurriculumService  ){

  }
}
