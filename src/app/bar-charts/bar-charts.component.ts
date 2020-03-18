import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit {
  //for pie
  public pieChartLabels = ['Complete', 'Incomplete', 'Not Started' ];
  public pieChartData = [150, 100, 50];
  public pieChartType = 'pie';

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  pieChartColor:any = [
    {
        backgroundColor: ['#28a745', '#2092ed','#ffc107']
    }
]

  
  //for barChartData
  // public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartType = 'bar';
  // public barChartLegend = true;

  // public barChartData = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];


  //for doughnut
  // public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  // public doughnutChartData = [120, 150, 180, 90];
  // public doughnutChartType = 'doughnut';
  ngOnInit() {
  }

}