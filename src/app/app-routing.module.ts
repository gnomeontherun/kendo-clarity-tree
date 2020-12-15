import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { ClarityTreeComponent } from './clarity-tree/clarity-tree.component';
import { KendoTreeComponent } from './kendo-tree/kendo-tree.component';


const routes: Routes = [
  { path: 'clarity', component: ClarityTreeComponent },
  { path: 'kendo', component: KendoTreeComponent },
  { path: 'chart', component: ChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
