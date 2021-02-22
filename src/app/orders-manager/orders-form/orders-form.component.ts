import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { timer } from 'rxjs';
import { CookieModel } from '../models/cookie-model';
import { Store } from '../models/store';
import { StoreList } from '../models/store-list';
import { SelectShopComponent } from '../select-shop/select-shop.component';
import { CookieOrdersService } from '../service/cookie-orders.service';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.scss']
})
export class OrdersFormComponent implements OnInit {

  interval: any;
  dialogRef: any;
  ordersIn: string[] = [];
  ordersOut: string[] = [];

  constructor(
    public dialog: MatDialog,
    private ordersService: OrdersService,
    private cookieOrdersService: CookieOrdersService,
  ) { }

  ngOnInit(): void {
    if(!this.cookieOrdersService.getShop())
      this.openSelectShopComponent();
    else {
      this.getOrders();
    }
  }

  openSelectShopComponent() {
    if (this.dialogRef) 
      return;
    else {
      this.dialogRef = this.dialog.open(SelectShopComponent, {
        width: "580px",
        disableClose: true,
      });
      this.dialogRef.afterClosed().subscribe((result: StoreList) => {
        if(result) {
          this.dialogRef = null;
          this.cookieOrdersService.setCookie(new CookieModel(result.id, result.name));
          this.getOrders();
        }
      });
    }
  }

  getOrders() {
    let t = this.cookieOrdersService.getShop();
    this.interval = setInterval(() => {
      if(!this.cookieOrdersService.getShop())
        this.openSelectShopComponent();
      else {
        this.ordersService.getOrders(new Store(this.cookieOrdersService.getShop())).subscribe(response => {
          if(response) {
            this.ordersIn = response.busy;
            this.ordersOut = response.ready;
          }
        }, 
        error => { 
          console.log(error);
        });
      }
    }, 5000);
   }
}