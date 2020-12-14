import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoTreeComponent } from './kendo-tree.component';

describe('KendoTreeComponent', () => {
  let component: KendoTreeComponent;
  let fixture: ComponentFixture<KendoTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
