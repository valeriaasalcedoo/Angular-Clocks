import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientClockComponent } from './gradient-clock.component';

describe('GradientClockComponent', () => {
  let component: GradientClockComponent;
  let fixture: ComponentFixture<GradientClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradientClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
