import { Injectable } from "@angular/core";
import { sortOperationsByPeriod } from "src/helpers";
import { initialOperations } from "src/operations";
import { OperationType, TimePeriod, Operation } from "src/typedefs";

@Injectable({ providedIn: 'root' })
export class OperationsService {
  private operationType: OperationType = OperationType.Waste;
  private timePeriod: TimePeriod = TimePeriod.Day;
  private operations: Operation[] = initialOperations;

  public getOperationGroups() {
    return sortOperationsByPeriod(
      this.operations.filter((op) => op.type === this.operationType),
      this.timePeriod,
    );
  }

  public getOperationType() {
    return this.operationType;
  }

  public setOperationType(type: OperationType) {
    this.operationType = type;
  }

  public getTimePeriod() {
    return this.timePeriod;
  }

  public setTimePeriod(period: TimePeriod) {
    this.timePeriod = period;
  }

  public addOperation(operation: Operation) {
    this.operations = [...this.operations, operation];
  }
}
