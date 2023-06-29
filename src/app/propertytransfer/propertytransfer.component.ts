import { Component } from '@angular/core';

@Component({
  selector: 'app-propertytransfer',
  templateUrl: './propertytransfer.component.html',
  styleUrls: ['./propertytransfer.component.css']
})
export class PropertytransferComponent {
  formRows: number[] = [1]; 
  showline:boolean=false;// Array to store the row numbers
  labels: any = {
    'received-by': 'ተ.ቁ',
    'property-list': 'የእቃው ዝርዝር',
    'mobile': 'መለያ ቁጥር',
    'address': 'የፋብሪካ ቁጥር',
    'additional-info': 'የፋብሪካ ቁጥር',
    'quantity': 'አንዱ ',
    'unit-price': 'ፋቁጥር',
    
  };

  placeholders: any = {
    'received-by': 'ተ.ቁ',
    'property-list': 'የእቃው ዝርዝር',
    'mobile': 'መለያ ቁጥር',
    'address': 'የፋብሪካ ቁጥር',
    'additional-info': 'የፋብሪካ ቁጥር',
    'quantity': 'አንዱ ',
    'unit-price': 'ፋቁጥር',
  
  };
  label: any = {
    'received-by': 'Number',
    'property-list': 'Describes',
    'mobile': 'Pin',
    'address': 'execute',
    'additional-info': 'unit of measurement',
    'quantity': 'quantity',
    'unit-price': 'remark',
    
  };

  addNewRow() {
    const newRowNumber = this.formRows.length + 1;
    this.formRows.push(newRowNumber);
    this.showline=true;
  }
}

