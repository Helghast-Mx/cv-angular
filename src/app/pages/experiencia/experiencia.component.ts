import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../../services/curriculum.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  cargada=false;
  constructor(public _xp : CurriculumService) {
    this.cargada=true;
   }
  
  ngOnInit() {
  }

}
