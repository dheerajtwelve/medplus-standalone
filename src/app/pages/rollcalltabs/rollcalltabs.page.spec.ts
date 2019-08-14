import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollcalltabsPage } from './rollcalltabs.page';

describe('RollcalltabsPage', () => {
  let component: RollcalltabsPage;
  let fixture: ComponentFixture<RollcalltabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollcalltabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollcalltabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
