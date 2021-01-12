import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../interfaces/bill';



@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(
    private http: HttpClient
  ) { }

  getBill(): Observable<Bill> {
    return this.http.get<Bill>(`http://localhost:3000/bill`);
  }

  updateBill(bill: Bill): Observable<Bill> {
    return this.http.put<Bill>('bill', bill);
  }

  getCurrency(): Observable<any> {
    return this.http.get<any>(`http://data.fixer.io/api/latest?access_key=156f43c852d2eb2cdca7a4ba965e720a`);
  }
}
