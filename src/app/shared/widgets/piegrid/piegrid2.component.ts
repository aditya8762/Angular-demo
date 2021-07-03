import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexPlotOptions, ApexStroke } from 'ng-apexcharts';

@Component({
  selector: 'app-widget-piegrid2',
  templateUrl: './piegrid.component.html',
  styleUrls: ['./piegrid.component.scss']
})
export class Piegrid2Component implements OnInit {
  chartOptions!: {
    series: any;
    chart: ApexChart;
    labels: any;
    plotOptions: ApexPlotOptions;
    stroke: ApexStroke;
  };
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        height: 190,
        width:220,
        type: "radialBar",
        toolbar:{
          show:true,
        }
      },
      
      series: [52],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 12,
            size: "60%"
          },
          offsetX:0,
          offsetY:-20,
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              color: "white",
              fontSize: "15px",
              offsetY:8,
              show: true
            }
          }
        }
      },
    
      stroke: {
        lineCap: "round",
      },
      labels: ["Progress"]
    };
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    },300);
  }

}
