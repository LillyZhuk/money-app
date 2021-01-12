import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

import { RecordsComponent } from './records.component';
import { RecordsRoutingModule } from './records-routing.module';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    RecordsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    RecordsRoutingModule,
    FlexModule
  ]
})
export class RecordsModule { }
