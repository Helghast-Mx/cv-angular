import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../../services/curriculum.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public _datosHome : CurriculumService) { }

  ngOnInit() {
  }

}
