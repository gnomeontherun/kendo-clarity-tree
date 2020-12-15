import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  constructor(private http: HttpClient) { }

  kendoExpand = [];
  kendoCreate = [];
  clarityExpand = [];
  clarityCreate = [];

  ngOnInit() {
    this.http.get(environment.dataUrl).subscribe((results: any[]) => {
      let kendoCreate = [];
      let clarityCreate = [];
      let kendoExpand = [];
      let clarityExpand = [];
      results.forEach(result => {
        result.count = parseInt(result.count);
        if (result.type === 'Clarity') {
          if (result.expand) {
            clarityExpand.push(result);
          } else {
            clarityCreate.push(result);
          }
        } else {
          if (result.expand) {
            kendoExpand.push(result);
          } else {
            kendoCreate.push(result);
          }
        }
      });

      this.kendoCreate = kendoCreate = kendoCreate.sort((a, b) => a.count - b.count).map(value => value.time);
      this.kendoExpand = kendoExpand = kendoExpand.sort((a, b) => a.count - b.count).map(value => value.time);
      this.clarityCreate = clarityCreate = clarityCreate.sort((a, b) => a.count - b.count).map(value => value.time);
      this.clarityExpand = clarityExpand = clarityExpand.sort((a, b) => a.count - b.count).map(value => value.time);

      this.chartOptions.series = [
      {
        name: 'Kendo Create',
        type: 'line',
        data: kendoCreate
      },
      {
        name: 'Kendo Expand',
        type: 'line',
        data: kendoExpand
      },
      {
        name: 'Clarity Create',
        type: 'line',
        data: clarityCreate
      },
      {
        name: 'Clarity Expand',
        type: 'line',
        data: clarityExpand
      },
    ]
    });
    this.updateFlag = true;
  }

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = { 
    series: [],
    title: {
      text: 'Render Times for Clarity and Kendo Tree Views'
    },
    yAxis: {
      title: {
        text: 'Time To Render (ms)'
      },
      labels: {
        formatter: function() {
          return Math.round(this.value) + 'ms';
        }
      }
    },
    xAxis: {
      title: {
        text: 'Number of Nodes'
      },
      categories: ['1000', '3000', '5000', '10000'],
    },
    plotOptions: {
      line: {
          dataLabels: {
              enabled: true
          }
      }
  },
  }; // required
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {  } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

}
