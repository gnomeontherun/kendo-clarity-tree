import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { KendoTreeComponent } from './kendo-tree/kendo-tree.component';
import { ClarityTreeComponent } from './clarity-tree/clarity-tree.component';
import { TreeDataService } from './tree-data.service';


@NgModule({
  declarations: [
    AppComponent,
    KendoTreeComponent,
    ClarityTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    TreeViewModule
  ],
  providers: [TreeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
