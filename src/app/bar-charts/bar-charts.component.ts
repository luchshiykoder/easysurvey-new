import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit {

  public pieChartLabels = ['Pending', 'Attendent'];
  public pieChartData = [1200, 150];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
  }

}