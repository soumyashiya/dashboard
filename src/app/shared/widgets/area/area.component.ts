import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
        type: 'area'
    },
    title: {
        text: 'Royal Enfield Bikes, 2023',
        align: 'left'
    },
    subtitle: {
        text: '',
        align: 'left'
    },
    yAxis: {
        title: {
            useHTML: true,
            text: ''
        }
    },
    tooltip: {
        shared: true,
        headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
    },
    credits:{
        enabled:false
    },
    plotOptions: {
        series: {
            pointStart: 2012
        },
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Himalayan',
        data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
    }, {
        name: 'Hunter 350',
        data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]

    }, {
        name: 'Roadster 350',
        data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
    }, {
        name: 'Royal Enfield Classic 350 Bobber',
        data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]

    }, {
        name: 'Scrambler 350',
        data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
    }]
    }
  }

}
