import { Component, OnInit } from '@angular/core';
import { expense } from '../expense.model';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './view-expense.page.html',
  styleUrls: ['./view-expense.page.scss'],
})
export class ViewExpensePage implements OnInit {
  expense: expense

  constructor(private expensesService: ExpensesService) { }

  ngOnInit() {
    this.expense = this.expensesService.readSelected();
  }

  ionViewDidEnter() {
    this.expense = this.expensesService.readSelected();
    console.log(this.expense)
  }

}
