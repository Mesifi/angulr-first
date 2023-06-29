import { Component } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  formRows: number[] = [0]; // Initial row

  fields: any[] = [
    { id: 'number', label: 'ተ.ቁ\nNumber', placeholder: 'ተ.ቁ' },
    { id: 'description', label: 'የእቃው ዝርዝር\nDescribes', placeholder: 'የእቃው ዝርዝር' },
    { id: 'pin', label: 'መለያ ቁጥር\nPin', placeholder: 'መለያ ቁጥር' },
    { id: 'execute', label: 'የፋብሪካ ቁጥር\nexecute', placeholder: 'የፋብሪካ ቁጥር' },
    { id: 'unit', label: 'የፋብሪካ ቁጥር\nunit of measurement', placeholder: 'የፋብሪካ ቁጥር' },
    { id: 'quantity', label: 'የ\nquantity', placeholder: 'የ' },
    { id: 'remark', label: 'የፋቁጥር\nremark', placeholder: 'የፋቁጥር' }
  ];

  addNewRow() {
    const newRowNumber = this.formRows.length;
    this.formRows.push(newRowNumber);
  }

  getFieldId(rowIndex: number, fieldId: string): string {
    return '${fieldId}-${rowIndex}';
  }
}