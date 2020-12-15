import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { KendoTreeComponent } from './kendo-tree/kendo-tree.component';
import { ClarityTreeComponent } from './clarity-tree/clarity-tree.component';
import { TreeDataService, TREE_NODES } from './tree-data.service';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    KendoTreeComponent,
    ClarityTreeComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    TreeViewModule,
    HighchartsChartModule,
    HttpClientModule,
  ],
  providers: [TreeDataService, { provide: TREE_NODES, useValue: '1000'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
