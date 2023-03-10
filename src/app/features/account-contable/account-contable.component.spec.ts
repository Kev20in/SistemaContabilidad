import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountContableComponent } from './account-contable.component';

describe('AccountContableComponent', () => {
  let component: AccountContableComponent;
  let fixture: ComponentFixture<AccountContableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountContableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
