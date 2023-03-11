import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuxiliarSystemComponent } from './add-auxiliar-system.component';

describe('AddAuxiliarSystemComponent', () => {
  let component: AddAuxiliarSystemComponent;
  let fixture: ComponentFixture<AddAuxiliarSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAuxiliarSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuxiliarSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
