import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent {

  public currencies: string[] = ['EUR', 'USD', 'UAH'];
  public displayedColumns: string[] = ['Currency', 'Rate', 'Date'];

  @Input() currency: any;

}
