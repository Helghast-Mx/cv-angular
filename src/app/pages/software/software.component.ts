import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../../services/curriculum.service';
// import { lenguajes } from '../../interfaces/lenguajes.interface';
import { Chart } from "chart.js";
import { map } from "rxjs/operators";
import { ExprienceInte } from '../../interfaces/experience.interface';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {
  
 
  // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
 
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }

// ----------------------------------------
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public chartColors: any[] = [
    { 
      backgroundColor:["rgba(144, 197, 63, 0.4)", "rgba(0, 122, 204, 0.4)", "rgba(245, 222, 25, 0.4)", "rgba(241, 101, 36, 0.4)", "rgba(42, 169, 226, 0.4)"] 
    }]; 
    
    public barChartData:any[] = [
      {data: [40,60,70,85,80,0,100], label: [`Lenguajes de Programacion`]},
      // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];
  public barChartType:string = 'horizontalBar';
  public barChartLegend:boolean = true;
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
//  ---------------------------------------------------------
//  *******************************************************

// chart: any [] = [];


//  *******************************************************
 cargada=false;

 public doughnutChartLabels:any[] = [];
  public doughnutChartData:any[] = [70,50];
  public doughnutChartType:string = 'doughnut';

  constructor( private _lengServ:CurriculumService ) { 
    
  }
  
  ngOnInit() {
    this._lengServ.getLenguajes()
    .subscribe((data:any[])=>{

      // Grafica Lineal
    this.barChartLabels = data['software'].map ( res => res.lenguaje.leng );

    // Grafica de dona
    // this.doughnutChartData = data['dataBase'].map ( res => res.bd.bdPorc );
    this.doughnutChartLabels = data['dataBase'].map ( res => res.bd.bdNom );
    this.cargada=true;
      
          })
    

    }
  }


