import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCurrencyTypeComponent } from './add-currency-type.component';

describe('AddCurrencyTypeComponent', () => {
  let component: AddCurrencyTypeComponent;
  let fixture: ComponentFixture<AddCurrencyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCurrencyTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCurrencyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
