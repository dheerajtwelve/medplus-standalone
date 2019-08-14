import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitreqPage } from './submitreq.page';

describe('SubmitreqPage', () => {
  let component: SubmitreqPage;
  let fixture: ComponentFixture<SubmitreqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitreqPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitreqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
