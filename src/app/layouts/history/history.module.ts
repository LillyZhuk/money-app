import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './history-routing.module';
import { FlexModule } from '@angular/flex-layout';
import { HistoryChartComponent } from './components/history-chart/history-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HistoryTableComponent } from './components/history-table/history-table.component';

@NgModule({
  declarations: [
    HistoryComponent,
    HistoryChartComponent,
    HistoryTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HistoryRoutingModule,
    FlexModule,
    HighchartsChartModule
  ]
})
export class HistoryModule { }
