import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TreeDataService {

  getItems(): Observable<any[]> { 
    const items = [];
    for (let i = 1; i <= 3000; i++) {
        items.push({text: "Item " + i, id: i});
    }
    return of(items);
  }
}
