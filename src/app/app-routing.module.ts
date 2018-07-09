import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
    { path: 'hello', component: HeaderComponent },
    { path: '',
      redirectTo: '/hello',
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