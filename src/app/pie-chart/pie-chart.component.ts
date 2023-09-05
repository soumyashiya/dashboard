import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Royal Enfield Bikes, 2023',
        align: 'left'
    },
    subtitle: {
        text: '',
        align: 'left'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    credits:{
        enabled:false
    },
    series: [{
        type: 'pie',
        name: 'Share',
        data: [
            ['Himalayan', 23],
            ['Hunter 350', 18],
            {
                name: 'Roadster 350',
                y: 12,
                sliced: true,
                selected: true
            },
            [' Classic 350 Bobber', 9],
            ['Scrambler 350', 8],
            ['Others', 30]
        ]
    }]

    }
  }

}
