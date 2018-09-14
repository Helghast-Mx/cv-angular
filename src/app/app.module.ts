import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Services
import { HttpClientModule } from "@angular/common/http";

// Routes
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';

import { LoadingComponent } from './shared/loading/loading.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { SoftwareComponent } from './pages/software/software.component';
// Graficas
import { ChartsModule } from 'ng2-charts';
import { EducacionComponent } from './pages/educacion/educacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    LoadingComponent,
    InicioComponent,
    ExperienciaComponent,
    SoftwareComponent,
    EducacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
