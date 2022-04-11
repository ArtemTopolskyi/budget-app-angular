import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BudgetAppWrapperComponent } from './budget-app-wrapper/budget-app-wrapper.component';
import { TransactionsContainerComponent } from './transactions-container/transactions-container.component';
import { OperationTypeSelectorComponent } from './operation-type-selector/operation-type-selector.component';
import { TimePeriodSelectorComponent } from './time-period-selector/time-period-selector.component';
import { OperationContainerComponent } from './operation-container/operation-container.component';
import { OperationComponent } from './operation/operation.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { CreateOperationFormComponent } from './create-operation-form/create-operation-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategorySelectorComponent } from './category-selector/category-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetAppWrapperComponent,
    TransactionsContainerComponent,
    OperationTypeSelectorComponent,
    TimePeriodSelectorComponent,
    OperationContainerComponent,
    OperationComponent,
    ModalContainerComponent,
    CreateOperationFormComponent,
    CategorySelectorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
