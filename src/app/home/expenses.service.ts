import { Injectable } from '@angular/core';
import { findItemLabel } from '@ionic/core/dist/types/utils/helpers';
import { expense } from './expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private selExpense: expense;

  private expenses: expense[] = [];

  constructor() { }

  selectedExpense(expense: expense) {
    this.selExpense = expense;
  }

  readSelected() {
    return this.selExpense;
  }

  getAllExpenses() {
    return [...this.expenses];
  }

  getExpense(expenseId: string) {
    return {...this.expenses.find(expense => {
      return expense.title === expenseId;
    })};
  }

  addExpense(expense: expense) {
    this.expenses.push(expense);
    console.log(this.expenses)
  }
}
