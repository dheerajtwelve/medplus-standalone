import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowtabsPage } from './workflowtabs.page';

describe('WorkflowtabsPage', () => {
  let component: WorkflowtabsPage;
  let fixture: ComponentFixture<WorkflowtabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowtabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowtabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
