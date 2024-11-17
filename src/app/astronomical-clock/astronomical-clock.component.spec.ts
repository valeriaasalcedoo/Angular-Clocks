import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomicalClockComponent } from './astronomical-clock.component';

describe('AstronomicalClockComponent', () => {
  let component: AstronomicalClockComponent;
  let fixture: ComponentFixture<AstronomicalClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstronomicalClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstronomicalClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
