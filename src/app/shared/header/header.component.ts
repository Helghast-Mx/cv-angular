import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { CurriculumService } from '../../services/curriculum.service';

interface MenuItem {
  texto : string,
  ruta : string,
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerMenu : MenuItem [] = [
    {
      texto: 'Inicio',
      ruta : 'inicio'
    },
    {
      texto: 'Indice',
      ruta : 'indice'
    },
    {
      texto: 'Acerca de mi',
      ruta : 'about'
    },
    {
      texto: 'Experiencia',
      ruta : 'experiencia'
    },
    {
      texto: 'Software',
      ruta : 'software'
    },
    {
      texto: 'Educacion',
      ruta : 'educacion'
    },
    
  ]

  
  idioma : string = 'Español'
  idiomaChange : boolean = false

  constructor(public _infoService : InfoPaginaService,
              private cvService : CurriculumService
              ) { 

  }
  cambiarIdioma(){
    if(this.idiomaChange === false){
      this.idiomaChange = true
      this.idioma = "English"
      this.cvService.changeLenguaje = this.idiomaChange;
      console.log(  ` headerMenu `, this.headerMenu )
      this.headerMenu[0].texto = 'Home'
      this.headerMenu[1].texto = 'Index'
      this.headerMenu[2].texto = 'About Me'
      this.headerMenu[3].texto = 'Experience'
      this.headerMenu[4].texto = 'Software'
      this.headerMenu[5].texto = 'Education'
      this.cvService.getIndice();
      this.cvService.getDatosPersonales();
      this.cvService.getDescripcion();
      this.cvService.getExperiencia();
      this.cvService.getLenguajes();
      this.cvService.getEscolaridad();
      this.cvService.getCursos();
    } else {
      this.headerMenu[0].texto = 'Inicio'
      this.headerMenu[1].texto = 'Indice'
      this.headerMenu[2].texto = 'Acerca de mi'
      this.headerMenu[3].texto = 'Experiencia'
      this.headerMenu[4].texto = 'Software'
      this.headerMenu[5].texto = 'Educacion'
      this.idioma = "Español"
      this.idiomaChange = false
      this.cvService.changeLenguaje = this.idiomaChange;
      this.cvService.getIndice();
      this.cvService.getDatosPersonales();
      this.cvService.getDescripcion();
      this.cvService.getExperiencia();
      this.cvService.getLenguajes();
      this.cvService.getEscolaridad();
      this.cvService.getCursos();

    }
  }

  ngOnInit() {
  }

  

}
