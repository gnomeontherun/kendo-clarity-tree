import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { TreeDataService, TREE_NODES } from '../tree-data.service';

import { KendoTreeComponent } from './kendo-tree.component';

describe('KendoTreeComponent 1000', () => {
  let component: KendoTreeComponent;
  let fixture: ComponentFixture<KendoTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TreeViewModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '1000' } ],
      declarations: [ KendoTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should created', () => {
    expect(component).toBeTruthy();
  });
  
  it('should be created and expand', () => {
    component.expand = true;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

describe('KendoTreeComponent 3000', () => {
  let component: KendoTreeComponent;
  let fixture: ComponentFixture<KendoTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TreeViewModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '3000' } ],
      declarations: [ KendoTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should created', () => {
    expect(component).toBeTruthy();
  });
  
  it('should be created and expand', () => {
    component.expand = true;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

describe('KendoTreeComponent 5000', () => {
  let component: KendoTreeComponent;
  let fixture: ComponentFixture<KendoTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TreeViewModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '5000' } ],
      declarations: [ KendoTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should created', () => {
    expect(component).toBeTruthy();
  });
  
  it('should be created and expand', () => {
    component.expand = true;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

describe('KendoTreeComponent 10000', () => {
  let component: KendoTreeComponent;
  let fixture: ComponentFixture<KendoTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TreeViewModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '10000' } ],
      declarations: [ KendoTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should created', () => {
    expect(component).toBeTruthy();
  });
  
  it('should be created and expand', () => {
    component.expand = true;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});