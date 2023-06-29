import { Component } from '@angular/core';

@Component({
  selector: 'app-storeproperty',
  templateUrl: './storeproperty.component.html',
  styleUrls: ['./storeproperty.component.css']
})
export class StorepropertyComponent {
  formRows: number[] = [1]; 
  showline:boolean=false;// Array to store the row numbers
  labels: any = {
    'received-by': 'ከ ተቀብያለሁ',
    'property-list': 'የእቃው የንብረት ዝርዝር',
    'mobile': 'ሞዴል',
    'address': 'ሴሪ',
    'additional-info': 'ተከታታይ',
    'quantity': 'ብዛት',
    'unit-price': 'የአንዱ ዋጋ',
    'total-price': 'ጠቅላላ ዋጋ'
  };

  placeholders: any = {
    'received-by': 'ከ ተቀብያለሁ',
    'property-list': 'የእቃው የንብረት ዝርዝር',
    'mobile': 'ሞዴል',
    'address': 'ሴሪ',
    'additional-info': 'ተከታታይ',
    'quantity': 'ብዛት',
    'unit-price': 'የአንዱ ዋጋ',
    'total-price': 'ጠቅላላ ዋጋ'
  };

  addNewRow() {
    const newRowNumber = this.formRows.length + 1;
    this.formRows.push(newRowNumber);
    this.showline=true;
  }
}

