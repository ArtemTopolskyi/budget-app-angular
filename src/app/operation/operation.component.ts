import { Component, Input, OnInit } from '@angular/core';
import { colorClassByCategory, formatDateAndTime, getCategoryName } from 'src/helpers';
import { Operation, OperationCategory, OperationType } from 'src/typedefs';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
  @Input() operation!: Operation

  constructor() { }

  ngOnInit(): void {
  }

  formatDate(date: Date) {
    return formatDateAndTime(date);
  }

  getName(category: OperationCategory) {
    return getCategoryName(category);
  }

  isNegative(type: OperationType) {
    return type === OperationType.Waste;
  }

  classByCategory(category: OperationCategory) {
    return colorClassByCategory(category);
  }
}
