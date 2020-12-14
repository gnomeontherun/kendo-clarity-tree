import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClarityTreeComponent } from './clarity-tree/clarity-tree.component';
import { KendoTreeComponent } from './kendo-tree/kendo-tree.component';


const routes: Routes = [
  { path: 'clarity', component: ClarityTreeComponent },
  { path: 'kendo', component: KendoTreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
