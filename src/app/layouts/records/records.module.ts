import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

import { RecordsComponent } from './records.component';
import { RecordsRoutingModule } from './records-routing.module';
import { FlexModule } from '@angular/flex-layout';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './components/delete-category/delete-category.component';

@NgModule({
  declarations: [
    RecordsComponent,
    CategoryTableComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent
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
