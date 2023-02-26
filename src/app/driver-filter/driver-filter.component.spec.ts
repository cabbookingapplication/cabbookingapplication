import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverFilterComponent } from './driver-filter.component';

describe('DriverFilterComponent', () => {
  let component: DriverFilterComponent;
  let fixture: ComponentFixture<DriverFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
