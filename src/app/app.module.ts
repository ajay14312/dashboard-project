// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatSelectModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { AppRouterModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { NgMatTableComponent } from './ng-mat-table/ng-mat-table.component';
import { NgDatamapsComponent } from './ng-datamaps/ng-datamaps.component';
import { NgDashboardComponent } from './ng-dashboard/ng-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavBarComponent,
    DashboardComponent,
    GetStartedComponent,
    DonutChartComponent,
    NgMatTableComponent,
    NgDatamapsComponent,
    NgDashboardComponent
  ],
  imports: [
    CommonModule,
    // AppRouterModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule
  ],
  exports: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavBarComponent,
    DashboardComponent,
    GetStartedComponent,
    DonutChartComponent,
    NgMatTableComponent,
    NgDatamapsComponent,
    NgDashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class DashboardAppModule { }
