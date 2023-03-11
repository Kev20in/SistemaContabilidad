import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccountContableComponent } from './add-account-contable.component';

describe('AddAccountContableComponent', () => {
  let component: AddAccountContableComponent;
  let fixture: ComponentFixture<AddAccountContableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccountContableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccountContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
