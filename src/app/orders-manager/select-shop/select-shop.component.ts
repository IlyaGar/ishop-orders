import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StoreList } from '../models/store-list';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'app-select-shop',
  templateUrl: './select-shop.component.html',
  styleUrls: ['./select-shop.component.scss']
})
export class SelectShopComponent implements OnInit {

  shops: StoreList[] = [];
  shopControl = new FormControl(null, Validators.required);

  constructor(
    private ordersService: OrdersService,
    public dialogRef: MatDialogRef<SelectShopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.getShopList();
  }

  onOkClick(store: StoreList) {
    this.dialogRef.close(store);
  }

  getShopList() {
    this.ordersService.getShops().subscribe(response => {
      if(response)
        this.shops = response;
    }, 
    error => { 
      console.log(error);
    });
  }
}