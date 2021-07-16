import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  providers: [HeaderComponent],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio:number=new Date().getFullYear();
  dataPers:any = {};

  constructor(public _infoService : InfoPaginaService,
              public comp : HeaderComponent) { }

  idioma : string = 'Español'
  cambiarIdioma(){
    this.comp.cambiarIdioma()
    this.comp.idiomaChange
    if(this.comp.idiomaChange){
      this.idioma = 'English'
    } else {
      this.idioma = 'Español'
    }
    console.log(  ` Evento desde el footer `, this.comp.idiomaChange  )
  }
  ngOnInit() {
    this._infoService.getInfoPersonal()
    .subscribe( (dataPersonal:any)=>{
this.dataPers= dataPersonal;
    }  )
  }

}
