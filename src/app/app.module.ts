import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PolarRadarChartComponent } from './polar-radar-chart/polar-radar-chart.component';
import { LinearGaugeChartComponent } from './linear-gauge-chart/linear-gauge-chart.component';
import { NumberCardChartComponent } from './number-card-chart/number-card-chart.component';
import { TreeMapChartComponent } from './tree-map-chart/tree-map-chart.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    PolarRadarChartComponent,
    LinearGaugeChartComponent,
    NumberCardChartComponent,
    TreeMapChartComponent,
    SidebarComponent,
    HeaderComponent,
   
    
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
