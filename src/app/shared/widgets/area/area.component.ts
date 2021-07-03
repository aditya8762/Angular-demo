import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexDataLabels, ApexStroke, ApexTooltip, ApexXAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  chartOptions!:{
    series:ApexAxisChartSeries,
    chart:any;
    xaxis:ApexXAxis;
    stroke:ApexStroke;
    tooltip:ApexTooltip;
    dataLabels:ApexDataLabels;
  }

  constructor() { }

  ngOnInit(){
    this.chartOptions = {
      series: [
        {
          name: "Total Applications",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Shortlisted",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }
}
