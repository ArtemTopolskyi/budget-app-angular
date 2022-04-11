import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/shared/operations.service';
import { TimePeriod } from 'src/typedefs';

@Component({
  selector: 'app-time-period-selector',
  templateUrl: './time-period-selector.component.html',
  styleUrls: ['./time-period-selector.component.scss']
})
export class TimePeriodSelectorComponent implements OnInit {
  operationsService: OperationsService;
  TimePeriod = TimePeriod;

  constructor(operationsService: OperationsService) {
    this.operationsService = operationsService;
  }

  ngOnInit(): void {
  }

  isActive(period: TimePeriod) {
    return period === this.operationsService.getTimePeriod();
  }

  setTimePeriod(period: TimePeriod) {
    this.operationsService.setTimePeriod(period);
  }

}
