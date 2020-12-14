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

  constructor(private service: TreeDataService) {
    console.log(this.service);
  }

  ngAfterContentInit() {
    console.log('afterContentInit')
  }

  fetchChildren = (node: any): Observable<any[]> => this.service.getItems();

  hasChildren = (node: any): boolean => true;

}
