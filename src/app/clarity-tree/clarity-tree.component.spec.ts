import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarityTreeComponent } from './clarity-tree.component';

describe('ClarityTreeComponent', () => {
  let component: ClarityTreeComponent;
  let fixture: ComponentFixture<ClarityTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClarityTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
