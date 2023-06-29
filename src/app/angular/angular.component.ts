import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit{
constructor(){

}
ngOnInit(): void {  
}
products=[
{id:1, name:'analog watch', price:'109',color:'black',available:'available', Image:'/assets/download.jpg'},
{id:2, name:'smart tv', price:'3339',color:'black',available:'available', Image:'/assets/download 1.jpg'},
{id:3, name:'apple iphone 12', price:'1855',color:'black',available:'no available', Image:'/assets/download 2.jpg'},
{id:4, name:'automatic washing machine', price:'1765',color:'white',available:'available', Image:'/assets/download 3.jpg'},
{id:5, name:'refrigerator', price:'2815',color:'white',available:'no available', Image:'/assets/download 4.jpg'},
{id:6, name:'table', price:'2145',color:'white',available:'available', Image:'/assets/download 5.jpg'},
];
}