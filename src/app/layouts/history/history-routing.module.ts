import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryComponent } from './history.component';
import { HistoryDetailsComponent } from './components/history-details/history-details.component';

const routes: Routes = [
  { path: '', component: HistoryComponent },
  { path: 'details/:id', component: HistoryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
