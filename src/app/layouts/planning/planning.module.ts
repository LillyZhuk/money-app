import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

import { PlanningComponent } from './planning.component';
import { PlanningRoutingModule } from './planning-routing.module';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    PlanningComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    PlanningRoutingModule,
    FlexModule
  ]
})
export class PlanningModule { }
