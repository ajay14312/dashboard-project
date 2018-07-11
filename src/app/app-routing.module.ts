import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GetStartedComponent } from './get-started/get-started.component';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'getStarted', component: GetStartedComponent },
    { path: '',
      redirectTo: '/getStarted',
      pathMatch: 'full'
    }
  ];

  @NgModule({
      imports:[
          RouterModule.forRoot(appRoutes)
      ],
      exports: [RouterModule]
  })

  export class AppRouterModule {
  }