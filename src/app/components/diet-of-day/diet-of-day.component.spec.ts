import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietOfDayComponent } from './diet-of-day.component';

describe('DietOfDayComponent', () => {
  let component: DietOfDayComponent;
  let fixture: ComponentFixture<DietOfDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietOfDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
