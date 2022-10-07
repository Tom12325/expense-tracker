import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExpensePage } from './new-expense/new-expense.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: '../new-expense',
    component: NewExpensePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
