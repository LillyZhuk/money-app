import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  { path: '',
    loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule) },
  { path: 'bill',
    canActivate: [AuthGuard],
    loadChildren: () => import('./layouts/bill/bill.module').then(m => m.BillModule) },
  { path: 'history',
    canActivate: [AuthGuard],
    loadChildren: () => import('./layouts/history/history.module').then(m => m.HistoryModule) },
  { path: 'planning',
    canActivate: [AuthGuard],
    loadChildren: () => import('./layouts/planning/planning.module').then(m => m.PlanningModule) },
  { path: 'records',
    canActivate: [AuthGuard],
    loadChildren: () => import('./layouts/records/records.module').then(m => m.RecordsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
