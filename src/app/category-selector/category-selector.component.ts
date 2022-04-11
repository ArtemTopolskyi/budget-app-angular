import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OperationsService } from 'src/app/shared/operations.service';
import { colorClassByCategory, getCategoryName } from 'src/helpers';
import { Operation, OperationCategory, OperationType, WasteOperationCategory } from 'src/typedefs';

export const operationHighlightColorClasses = {
  [OperationCategory.Food]: 'highlight-peach',
  [OperationCategory.Shopping]: 'highlight-pink',
  [OperationCategory.Cafe]: 'highlight-orange',
  [OperationCategory.Health]: 'highlight-green',
  [OperationCategory.OtherWaste]: 'highlight-blue',
  [OperationCategory.Beauty]: 'highlight-purple',
  [OperationCategory.Cashback]: 'highlight-red',
  [OperationCategory.OtherIncome]: 'highlight-yellow',
  [OperationCategory.Salary]: 'highlight-light-green',
  [OperationCategory.Terminal]: 'highlight-light-blue',
}

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {
  operationsService: OperationsService;

  @Input() selectedCategory!: OperationCategory | null;
  @Output() setCategoryEvent = new EventEmitter<OperationCategory>();

  constructor(operationsService: OperationsService) {
    this.operationsService = operationsService;
  }

  ngOnInit(): void {
  }

  setCategory(category: OperationCategory) {
    this.setCategoryEvent.emit(category);
  }

  getName(category: OperationCategory) {
    return getCategoryName(category)
  }

  getCategories(type: OperationType) {
    if (type === OperationType.Income) {
      return [
        'other-income',
        'terminal',
        'salary',
        'cashback',
      ] as OperationCategory[];
    } else {
      return [
        'food',
        'other-waste',
        'shopping',
        'cafe',
        'health',
        'beauty',
      ] as OperationCategory[];
    }
  }

  getColorClass(category: OperationCategory) {
    return colorClassByCategory(category);
  }

  getHighlightColorClass(category: OperationCategory) {
    return operationHighlightColorClasses[category];
  }
}