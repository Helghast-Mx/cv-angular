import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio:number=new Date().getFullYear();
  dataPers:any = {};

  constructor(public _infoService : InfoPaginaService) { }

  ngOnInit() {
    this._infoService.getInfoPersonal()
    .subscribe( (dataPersonal:any)=>{
this.dataPers= dataPersonal;
    }  )
  }

}
