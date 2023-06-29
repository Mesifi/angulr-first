import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  ngOnInit(): void {
    Highcharts.chart('pieChartContainer', {
      title: {
        text: 'Pie Chart'
      },
      series: [{
        type: 'pie',
        name: 'Pie Chart',
        data: [
          ['Category 1', 10],
          ['Category 2', 20],
          ['Category 3', 30],
          ['Category 4', 15],
          ['Category 5', 25]
        ]
      }]
    });
  }
}
