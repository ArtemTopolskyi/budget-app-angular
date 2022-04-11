import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-app-wrapper',
  templateUrl: './budget-app-wrapper.component.html',
  styleUrls: ['./budget-app-wrapper.component.scss']
})
export class BudgetAppWrapperComponent implements OnInit {
  isModalOpened = false;

  constructor() { }

  openModal() {
    this.isModalOpened = true;
  }

  closeModal() {
    this.isModalOpened = false;
  }

  ngOnInit(): void {
  }
}
