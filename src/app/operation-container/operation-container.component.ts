import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/shared/operations.service';
import { monthName } from 'src/constants';
import { formatDate, isToday, isYesterday } from 'src/helpers';
import { TimePeriod } from 'src/typedefs';

@Component({
  selector: 'app-operation-container',
  templateUrl: './operation-container.component.html',
  styleUrls: ['./operation-container.component.scss']
})
export class OperationContainerComponent implements OnInit {
  operationService: OperationsService;

  constructor(
    operationService: OperationsService,
  ) {
    this.operationService = operationService;
  }

  ngOnInit(): void {
  }

  getDayLabel = (date: Date) => {
    if (isToday(date)) {
      return 'Сегодня';
    } else if (isYesterday(date)) {
      return 'Вчера';
    } else {
      return formatDate(date);
    }
  }
  
  getWeekLabel = (date: Date) => {
    const lastDay = new Date(date);
    
    lastDay.setDate(lastDay.getDate() + 6);
  
    return `${formatDate(date)} - ${formatDate(lastDay)}`;
  }
  
  getMonthLabel = (date: Date) => (
    `${monthName[date.getMonth()]}`
  )
  
  getYearLabel = (date: Date) => (
    `${date.getFullYear()}`
  )
  
  getLabel = (timePeriod: TimePeriod, date: Date) => {
    switch (timePeriod) {
      case TimePeriod.Year:
        return this.getYearLabel(date);
      case TimePeriod.Month:
        return this.getMonthLabel(date);
      case TimePeriod.Week:
        return this.getWeekLabel(date);
      case TimePeriod.Day:
      default:
        return this.getDayLabel(date);
    }
  }
}
