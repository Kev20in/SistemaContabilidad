import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarSystemComponent } from './auxiliar-system.component';

describe('AuxiliarSystemComponent', () => {
  let component: AuxiliarSystemComponent;
  let fixture: ComponentFixture<AuxiliarSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuxiliarSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliarSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
