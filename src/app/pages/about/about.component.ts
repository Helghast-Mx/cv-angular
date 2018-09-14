import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { CurriculumService } from '../../services/curriculum.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
cargada=false;
descripcion:any = {};
  constructor(public _serviceAbout : InfoPaginaService,
              public _servCV : CurriculumService) {
this._servCV.getDescripcion()
.subscribe( (descr:any[]) =>{
this.descripcion = descr;
console.log(this.descripcion);
}  )

this.cargada=true;
               }

  ngOnInit() {
  }

}
