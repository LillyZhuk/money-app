import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { BillService } from '../../shared/services/bill.service';
import { IBill, ICurrency } from '../../shared/interfaces/bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit, OnDestroy {

  public currency: ICurrency;
  public bill: IBill;
  public isLoaded: boolean = false;
  private sub: Subscription = new Subscription();

  constructor(
    private billService: BillService
  ) { }

  public ngOnInit(): void {
    this.sub.add(
      forkJoin<IBill, ICurrency>([
        this.billService.getBill(),
        this.billService.getCurrency()
      ]
      ).subscribe(([data, res]) => {
        this.bill = data;
        this.currency = res;
        this.isLoaded = true;
      })
    );
  }

  public onRefresh(): void {
    this.isLoaded = false;
    this.sub.add(
      this.billService.getCurrency().subscribe(
        (currency: any) => {
          this.currency = currency;
          this.isLoaded = true;
        })
    );
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
