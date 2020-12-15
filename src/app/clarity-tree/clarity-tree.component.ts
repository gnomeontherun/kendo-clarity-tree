import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TreeDataService } from '../tree-data.service';

@Component({
  selector: 'app-clarity-tree',
  templateUrl: './clarity-tree.component.html',
  styleUrls: ['./clarity-tree.component.css'],
})
export class ClarityTreeComponent {

  data = this.service.getItems();
  expand = false;

  constructor(private service: TreeDataService) {
    // setTimeout(() => {
    //   this.expand = true;
    // }, 5000);
  }

  fetchChildren = (node: any): Observable<any[]> => this.service.getItems(node);

  hasChildren = (node: any): boolean => true;

}
