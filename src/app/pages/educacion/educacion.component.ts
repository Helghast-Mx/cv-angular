import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../../services/curriculum.service';
import { eduIntf, CursoInt } from '../../interfaces/educacion.interfaces';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  // dataEdu:eduIntf[] = [];
  cargada=false;
  dataCursos:any [] = [];
  dataUni:any = {};
  constructor(public _eduServ: CurriculumService) 
  {
  }

  ngOnInit() {
    this._eduServ.getCursos()
    .subscribe( (dataCurs:CursoInt[]) =>{
      this.dataCursos = dataCurs;
      console.log(  ` desde educacion.component `, this.dataCursos )
    } )
    this._eduServ.getEducacion()
    .subscribe( (dataUni:any)  =>{
      this.dataUni = dataUni;
      console.log(this.dataUni);
      this.cargada=true;
    }  )
  }

}
