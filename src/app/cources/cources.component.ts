import { Component } from '@angular/core';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent {
courses=[
  {id:101, name:'javascript for beginners', author:'john heikele', duration: 48, type:'free', 
  price:'0.00', ratings:3.5, image:'/assets/download 5.jpg',
  description:'In this cource you will learn the fundamentals of javascript. This cource is purely designed for begginer'
},
  {id:102, name:'angular for beginners', author:'Mark Vought', duration: 28, type:'premium', 
  price:'129.00', ratings:4.5, image:'/assets/download 2.jpg',
  description:'In this cource you will learn the fundamentals of javascript. This cource is purely designed for begginer'
},
  {id:103, name:'react for beginners', author:'Mark Vought', duration: 28, type:'premium', 
  price:'0.00', ratings:3.5, image:'/assets/download 1.jpg',
  description:'In this cource you will learn the fundamentals of javascript. This cource is purely designed for begginer'
},
  {id:104, name:'advance angular cource', author:'Steve Smith', duration: 18.5, type:'free', 
  price:'145.00', ratings:4.8, image:'/assets/download.jpg',
  description:'In this cource you will learn the fundamentals of javascript. This cource is purely designed for begginer'
},
  {id:105, name:' advance beginners', author:'john heikele', duration: 60, type:'premium', 
  price:'150.00', ratings:4.5, image:'/assets/download 5.jpg',
  description:'In this cource you will learn the fundamentals of javascript. This cource is purely designed for begginer'
},
  {id:106, name:'angular with .NET core', author:'Mark Vought', duration: 68, type:'premium', 
  price:'129.00', ratings:4.5, image:'/assets/download 4.jpg',
  description:'In this cource you will learn the fundamentals of javascript. This cource is purely designed for begginer'
},
  {id:107, name:'javascript for beginners', author:'merry smith', duration: 18.5, type:'free', 
  price:'0.00', ratings:4, image:'/assets/download 3.jpg',
  description:'In this cource you will learn the fundamentals of javascript. This cource is purely designed for begginer'
},
  {id:108, name:' ux design cource', author:'steve smith', duration: 19, type:'premium', 
  price:'115.50', ratings:4.8, image:'/assets/download 2.jpg',
  description:'In this cource you will learn the fundamentals of javascript. This cource is purely designed for begginer'
},
{id:109, name:'javascript for beginners', author:'john heikele', duration: 48, type:'free', 
price:'0.00', ratings:3.5, image:'/assets/download 5.jpg',
description:'In this cource you will learn the fundamentals of javascript. This cource is purely designed for begginer'
},
{id:110, name:'angular for beginners', author:'Mark Vought', duration: 28, type:'premium', 
price:'129.00', ratings:4.5, image:'/assets/download 2.jpg',
description:'In this cource you will learn the fundamentals of javascript. This cource is purely designed for begginer'
},
{id:111, name:'react for beginners', author:'Mark Vought', duration: 28, type:'premium', 
price:'0.00', ratings:3.5, image:'/assets/download 1.jpg',
description:'In this cource you will learn the fundamentals of javascript. This cource is purely designed for begginer'
},
{id:112, name:'advance angular cource', author:'Steve Smith', duration: 18.5, type:'free', 
price:'145.00', ratings:4.8, image:'/assets/download.jpg',
description:'In this cource you will learn the fundamentals of javascript. This cource is purely designed for begginer'
},
{id:113, name:' javascript for beginners', author:'john heikele', duration: 60, type:'premium', 
price:'150.00', ratings:4.5, image:'/assets/download 5.jpg',
description:'In this cource you will learn the fundamentals of javascript. This cource is purely designed for begginer'
},
{id:114, name:'angular with .NET core', author:'Mark Vought', duration: 68, type:'premium', 
price:'129.00', ratings:4.5, image:'/assets/download 4.jpg',
description:'In this cource you will learn the fundamentals of javascript. This cource is purely designed for begginer'
},
{id:115, name:'javascript for beginners', author:'merry smith', duration: 18.5, type:'free', 
price:'0.00', ratings:4, image:'/assets/download 3.jpg',
description:'In this cource you will learn the fundamentals of javascript. This cource is purely designed for begginer'
},
{id:116, name:' ux design cource', author:'steve smith', duration: 19, type:'premium', 
price:'115.50', ratings:4.8, image:'/assets/download 2.jpg',
description:'In this cource you will learn the fundamentals of javascript. This cource is purely designed for begginer'
},
];
gettotalcourses(){
  return this.courses.length;
}
gettotalfreecourses(){
  return this.courses.filter(course => course.type === 'free').length;
}
gettotalpremiumcourses(){
  return this.courses.filter(course => course.type === 'premium').length;
}
coursecountradiobutton: string='all';
searchtext:string='';

onradiobuttonselectionchanged(date:string){
this.coursecountradiobutton= date;
}

onsearchtextentered(searchvalue:string){
this.searchtext=searchvalue;
}
}
