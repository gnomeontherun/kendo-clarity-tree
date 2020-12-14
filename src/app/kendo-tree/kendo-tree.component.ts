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

  constructor(private service: TreeDataService) {}

  fetchChildren = (node: any): Observable<any[]> => this.service.getItems();

  hasChildren = (node: any): boolean => true;

}
