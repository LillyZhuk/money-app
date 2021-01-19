import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        CreateEventComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        RouterModule,
        HighchartsChartModule,
        ReactiveFormsModule
    ],
    providers: [],
  exports: [
    HeaderComponent,
    SidebarComponent
  ],
    bootstrap: []
})
export class SharedModule { }
