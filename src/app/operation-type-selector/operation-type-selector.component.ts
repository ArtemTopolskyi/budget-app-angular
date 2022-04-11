import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/shared/operations.service';
import { OperationType } from 'src/typedefs';

@Component({
  selector: 'app-operation-type-selector',
  templateUrl: './operation-type-selector.component.html',
  styleUrls: ['./operation-type-selector.component.scss']
})
export class OperationTypeSelectorComponent implements OnInit {
  operationsService: OperationsService;
  OperationType = OperationType;

  constructor(operationsService: OperationsService) {
    this.operationsService = operationsService;
  }

  changeOperationType(inputType: OperationType) {
    this.operationsService.setOperationType(inputType);
  }

  isActive(itemType: OperationType) {
    return itemType === this.operationsService.getOperationType();
  }

  ngOnInit(): void {
  }

}
