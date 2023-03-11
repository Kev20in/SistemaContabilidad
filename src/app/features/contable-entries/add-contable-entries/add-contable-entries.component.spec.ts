import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContableEntriesComponent } from './add-contable-entries.component';

describe('AddContableEntriesComponent', () => {
  let component: AddContableEntriesComponent;
  let fixture: ComponentFixture<AddContableEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContableEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContableEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
