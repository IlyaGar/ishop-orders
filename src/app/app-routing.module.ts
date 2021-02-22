import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersFormComponent } from './orders-manager/orders-form/orders-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: 'orders', component: OrdersFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
