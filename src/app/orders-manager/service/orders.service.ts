import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreList } from '../models/store-list'
import { environment } from 'src/environments/environment';
import { OrderInfo } from '../models/order-info';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private url = environment.apiUrl + "info/orders";
  private urlShop = environment.apiUrl + 'wms/store/list/';
  
  constructor(private http: HttpClient) { }

  getOrders(data: any): Observable<OrderInfo> {
    return this.http.post<OrderInfo>(`${this.url}`, data);
  }

  getShops(): Observable<StoreList[]> {
    return this.http.post<StoreList[]>(`${this.urlShop}`, '1');
  }
}
