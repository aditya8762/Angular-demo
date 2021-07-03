import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive } from 'ng-apexcharts';

@Component({
  selector: 'app-widget-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {
  chartOptions! :{
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
  };
  constructor() { }

  ngOnInit(){
    this.chartOptions = {
      series: [44, 25, 13, 18],
      chart: {
        type: "donut"
      },
      labels: ["Total Applications", "Shortlisted", "Selected", "Rejecte"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
              expandOnClick: true,
            },
            labels:{
              name:{
                color:'white'
              }
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

}
