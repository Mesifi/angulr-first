import { Component ,OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  ngOnInit(): void {
    Highcharts.chart('lineGraphContainer', {
      title: {
        text: 'Line Graph'
      },
      xAxis: {
        categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
      },
      yAxis: {
        title: {
          text: 'Value'
        }
      },
      series: [{
        type: 'line',
        name: 'Line Graph',
        data: [5, 10, 15, 20, 25]
      }]
    });
  }
}