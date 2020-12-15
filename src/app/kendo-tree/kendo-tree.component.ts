import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TreeDataService } from '../tree-data.service';

@Component({
  selector: 'app-kendo-tree',
  templateUrl: './kendo-tree.component.html',
  styleUrls: ['./kendo-tree.component.css'],
})
export class KendoTreeComponent {

  data = this.service.getItems();
  expand = false;

  constructor(private service: TreeDataService) {
    // setTimeout(() => {
    //   this.expanded = true;
    // }, 5000);
  }

  fetchChildren = (node: any): Observable<any[]> => this.service.getItems();

  hasChildren = (node: any): boolean => true;

  isExpanded = (item, index) => {
    return index === "0" && this.expand;
  }

}
