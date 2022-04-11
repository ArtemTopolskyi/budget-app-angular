import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OperationsService } from 'src/app/shared/operations.service';
import { OperationCategory } from 'src/typedefs';

@Component({
  selector: 'app-create-operation-form',
  templateUrl: './create-operation-form.component.html',
  styleUrls: ['./create-operation-form.component.scss']
})
export class CreateOperationFormComponent implements OnInit {
  operationsService: OperationsService;

  sum = new FormControl('');
  date = new FormControl(new Date());
  selectedCategory: OperationCategory | null = null;

  constructor(operationsService: OperationsService) {
    this.operationsService = operationsService;
  }

  ngOnInit(): void {
  }

  setCategory(category: OperationCategory) {
    this.selectedCategory = category;
  }

  onAdd() {
    if (!this.selectedCategory || !Number(this.sum.value) || !new Date(this.date.value)) {
      console.log('Wrong data')

      return;
    }

    this.operationsService.addOperation({
      date: new Date(this.date.value),
      sum: Number(this.sum.value),
      category: this.selectedCategory,
      type: this.operationsService.getOperationType(),
    })
  }
}
