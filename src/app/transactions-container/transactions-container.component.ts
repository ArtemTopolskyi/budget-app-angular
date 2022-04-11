import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OperationsService } from 'src/app/shared/operations.service';
import { OperationCategory, OperationType, TimePeriod } from 'src/typedefs';

@Component({
  selector: 'app-transactions-container',
  templateUrl: './transactions-container.component.html',
  styleUrls: ['./transactions-container.component.scss']
})
export class TransactionsContainerComponent implements OnInit {
  operationsService: OperationsService;

  @Output() openModalEvent = new EventEmitter();

  constructor(operationsService: OperationsService) {
    this.operationsService = operationsService;
  }

  openModal() {
    this.openModalEvent.emit();
  }

  ngOnInit(): void {
  }

}
