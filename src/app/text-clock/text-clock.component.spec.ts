import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextClockComponent } from './text-clock.component';

describe('TextClockComponent', () => {
  let component: TextClockComponent;
  let fixture: ComponentFixture<TextClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
