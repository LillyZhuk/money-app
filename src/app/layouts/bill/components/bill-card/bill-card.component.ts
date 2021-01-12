import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IBill, ICurrency } from '../../../../shared/interfaces/bill';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  public dollar: number;
  public hryvnia: number;

  @Input() bill: IBill;
  @Input() currency: ICurrency;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon(
      `dollar`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../../../assets/icons/dollar.svg`)
    );
    matIconRegistry.addSvgIcon(
      `hryvnia`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../../../assets/icons/hryvnia.svg`)
    );
  }

  public ngOnInit(): void {
    const {rates} = this.currency;
    this.dollar = rates['USD'] * this.bill.value;
    this.hryvnia = rates['UAH'] * this.bill.value;
  }

}
