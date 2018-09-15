import { NgModule } from "@angular/core";
    // el RouterModule le dira a angular si son las rutas principales o son las rutas hijas
import { Routes, RouterModule } from "@angular/router";

    // Rutas
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { InicioComponent } from "./pages/inicio/inicio.component";
import { ExperienciaComponent } from "./pages/experiencia/experiencia.component";
import { SoftwareComponent } from './pages/software/software.component';
import { EducacionComponent } from './pages/educacion/educacion.component';


    // Modulo encargado de la especificacion de las rutas
    // La idea de hacerlo mediante un modulo es para que el app.module.ts no quede tan cargado

    const app_routes:Routes = [

        // si esta vacia la ruta se dirige al portafolio component
    {path:'inicio',component:InicioComponent},
    {path:'indice',component:PortafolioComponent},
    {path:'experiencia',component:ExperienciaComponent},
    {path:'software',component:SoftwareComponent},
    {path:'educacion',component:EducacionComponent},
    {path:'about',component:AboutComponent},
    
    
    // cualquier otro path sera redireccionado al portafolio
    {path:'**', pathMatch:'full', redirectTo:'inicio'},
    ];


    @NgModule({
        // cuando trabajamos con modulos debemos importarlos
    imports:[
        // trabajamos con .forRoot porque seran las rutas de la raiz
        RouterModule.forRoot(app_routes, {useHash:true})
    ],
    // tambien debemos exportar el RouterModule para poder trabajar afuera de este componente
    exports:[
        RouterModule
    ]
    })
    export class AppRoutingModule {}

