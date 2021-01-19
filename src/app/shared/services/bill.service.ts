import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBill, ICurrency } from '../interfaces/bill';



@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(
    private http: HttpClient
  ) { }

  public getBill(): Observable<IBill> {
    return this.http.get<IBill>(`bill`);
  }

  public updateBill(bill: IBill): Observable<IBill> {
    return this.http.put<IBill>('bill', bill);
  }

  public getCurrency(): Observable<ICurrency> {
    return this.http.get<ICurrency>(`http://data.fixer.io/api/latest?access_key=156f43c852d2eb2cdca7a4ba965e720a`,
      {headers: {skip: 'rue'}});
  }
}
