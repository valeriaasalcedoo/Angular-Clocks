import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WristwatchClockComponent } from './wristwatch-clock.component';

describe('WristwatchClockComponent', () => {
  let component: WristwatchClockComponent;
  let fixture: ComponentFixture<WristwatchClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WristwatchClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WristwatchClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
