import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverReviewComponent } from './driver-review.component';

describe('DriverReviewComponent', () => {
  let component: DriverReviewComponent;
  let fixture: ComponentFixture<DriverReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
