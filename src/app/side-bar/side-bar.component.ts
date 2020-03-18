import { Component, OnInit, Input } from '@angular/core';
//import { ChartType, ChartOptions } from 'chart.js';
//import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})


export class SideBarComponent implements OnInit {

  // Pie
  @Input() name: string;
  // public pieChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public pieChartLabels: Label[] = [['Completed'], ['Pending']];
  // public pieChartData: SingleDataSet = [300, 200];
  // public pieChartType: ChartType = 'pie';
  // public pieChartLegend = true;
  // public pieChartPlugins = [];
 
//   public pieChartColors: Array < any > = [{
//     backgroundColor: ['rgb(0, 175, 22)', 'rgb(222, 13, 13)', 'rgb(255, 255, 255)'],
//     borderColor: ['rgb(255, 255, 255)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)']
//  }];

  constructor() {
    // monkeyPatchChartJsTooltip();
    // monkeyPatchChartJsLegend();
  }

  ngOnInit() {
  }
}