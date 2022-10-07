import { Component, NgModule } from '@angular/core';
import { expense } from './expense.model';
import { ExpensesService } from './expenses.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  expenses: expense[];
  
  constructor(private expensesService: ExpensesService) {}

  ionViewDidEnter() {
    this.expenses = this.expensesService.getAllExpenses();
    console.log(this.expenses)
  }

onSelect(selectedExpense: expense){
  this.expensesService.selectedExpense(selectedExpense);
}

}
