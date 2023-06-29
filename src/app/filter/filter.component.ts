import { Component , OnInit ,Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
constructor(){}
ngOnInit(): void {
  
}
@Input()all:number=0;
@Input()free:number=0;
@Input()premium:number=0;

selectedradiobuttonvalue:string='all';

@Output()
filterradiobuttonselectionchanged: EventEmitter<string>= new EventEmitter<string>();

onradiobuttonselectionchanged(){
  this.filterradiobuttonselectionchanged.emit(this.selectedradiobuttonvalue);

}


}
