import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContableEntriesComponent } from './contable-entries.component';

describe('ContableEntriesComponent', () => {
  let component: ContableEntriesComponent;
  let fixture: ComponentFixture<ContableEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContableEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContableEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
