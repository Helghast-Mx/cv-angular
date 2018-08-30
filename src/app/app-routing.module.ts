    import { NgModule } from "@angular/core";
    // el RouterModule le dira a angular si son las rutas principales o son las rutas hijas
    import { Routes, RouterModule } from "@angular/router";
    import { PortafolioComponent } from './pages/portafolio/portafolio.component';
    import { AboutComponent } from './pages/about/about.component';
    import { ItemComponent } from './pages/item/item.component';

    // Modulo encargado de la especificacion de las rutas
    // La idea de hacerlo mediante un modulo es para que el app.module.ts no quede tan cargado

    const app_routes:Routes = [

        // si esta vacia la ruta se dirige al portafolio component
    {path:'home',component:PortafolioComponent},
    {path:'about',component:AboutComponent},
    {path:'item',component:ItemComponent},
    // cualquier otro path sera redireccionado al portafolio
    {path:'**', pathMatch:'full', redirectTo:'home'},
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

