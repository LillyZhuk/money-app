import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

import { BillComponent } from './bill.component';
import { BillRoutingModule } from './bill-routing.module';
import { FlexModule } from '@angular/flex-layout';
import { BillCardComponent } from './components/bill-card/bill-card.component';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';

@NgModule({
  declarations: [
    BillComponent,
    BillCardComponent,
    CurrencyCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BillRoutingModule,
    FlexModule
  ]
})
export class BillModule { }
