import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemographicComponent } from './add-demographic.component';

describe('AddDemographicComponent', () => {
  let component: AddDemographicComponent;
  let fixture: ComponentFixture<AddDemographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDemographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDemographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
