import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroClockComponent } from './retro-clock.component';

describe('RetroClockComponent', () => {
  let component: RetroClockComponent;
  let fixture: ComponentFixture<RetroClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetroClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetroClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
