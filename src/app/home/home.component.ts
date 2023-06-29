import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  totalUsers: number;
  totalSales: number;
  latestSales: any[]; // Change the type to match the structure of your sales data
  currentYear: number;

  constructor() {
    // Sample data
    this.totalUsers = 500;
    this.totalSales = 10000;
    this.latestSales = [
      { product: 'Product A', price: 50, date: '2023-06-26' },
      { product: 'Product 2', price: 30, date: '2023-06-25' },
      { product: 'Product 3', price: 30, date: '2023-06-25' },
      { product: 'Product 4', price: 30, date: '2023-06-25' },
      
    ];
    this.currentYear = new Date().getFullYear();
  }
  ngOnInit(): void {
    
}


}