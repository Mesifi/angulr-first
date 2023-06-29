import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    
  }
  entersearchvalue:string='';

@Output()
  searchetextchanged:EventEmitter<string>=new EventEmitter<string>();


  onsearchtextchanged(){
    this.searchetextchanged.emit(this.entersearchvalue);
  }
}