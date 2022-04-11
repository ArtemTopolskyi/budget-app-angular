export enum OperationType {
  Income = 'income',
  Waste = 'waste',
}

export enum OperationCategory {
  Food = 'food',
  Shopping = 'shopping',
  OtherWaste = 'other-waste',
  Cafe = 'cafe',
  Health = 'health',
  Beauty = 'beauty',
  OtherIncome = 'other-income',
  Terminal = 'terminal',
  Salary = 'salary',
  Cashback = 'cashback',
}

export enum IncomeOperationCategory {
  OtherIncome = 'other-income',
  Terminal = 'terminal',
  Salary = 'salary',
  Cashback = 'cashback',
};

export enum WasteOperationCategory {
  Food = 'food',
  Shopping = 'shopping',
  OtherWaste = 'other-waste',
  Cafe = 'cafe',
  Health = 'health',
  Beauty = 'beauty',
};

export enum TimePeriod {
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Year = 'year',
}

export interface Operation {
  type: OperationType,
  sum: number,
  date: Date,
  category: OperationCategory,
};

export interface OperationGroup {
  operations: Operation[];
  date: Date;
}
