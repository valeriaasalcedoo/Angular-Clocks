import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-clock',
  standalone: true,
  templateUrl: './bar-clock.component.html',
  styleUrls: ['./bar-clock.component.css']
})
export class BarClockComponent {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor() {
    setInterval(() => {
      const now = new Date();
      this.hours = (now.getHours() / 24) * 100;
      this.minutes = (now.getMinutes() / 60) * 100;
      this.seconds = (now.getSeconds() / 60) * 100;
    }, 1000);
  }
}
