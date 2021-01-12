import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '',
    loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule) },
  { path: 'bill',
    loadChildren: () => import('./layouts/bill/bill.module').then(m => m.BillModule) },
  { path: 'history',
    loadChildren: () => import('./layouts/history/history.module').then(m => m.HistoryModule) },
  { path: 'planning',
    loadChildren: () => import('./layouts/planning/planning.module').then(m => m.PlanningModule) },
  { path: 'records',
    loadChildren: () => import('./layouts/records/records.module').then(m => m.RecordsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
