import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
// import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() label:string=''
  @Input() total:string=''
  @Input() percentage:string=''
  

  
  
 

  

  Highcharts=Highcharts
  // HC_exporting:any=''
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
        type: 'area',
        backgroundColor:null,
        borderWidth:0,
        margin:[2,2,2,2],
        height:60
      },

    title: {
        text: null,
        align: 'left'
    },
    subtitle: {
        text: null,
        align: 'left'
    },
    yAxis: {
        title: {
            useHTML: true,
            text: 'Million tonnes CO<sub>2</sub>-equivalents'
        }
    },
    tooltip: {
        shared: true,
        outside:true
    },
    legend:{
      enabled:false
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
    xAxis:{
      labels:{
        enables:false
      },
      title:{
        Text:null
      },
      startOnTick:false,
      endOnTick:false,
      tickOptions:[]
    },
    // yAxis:{
    //   labels:{
    //     enables:false
    //   },
    //   title:{
    //     Text:null
    //   },
    //   startOnTick:false,
    //   endOnTick:false,
    //   tickOptions:[]
    // },


    series: [{
      data:[71,78,30,68]
    }]
    }
    }
  

  
  

  }
