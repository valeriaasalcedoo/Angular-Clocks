import { Component } from '@angular/core';

@Component({
  selector: 'app-gradient-clock',
  standalone: true,

  templateUrl: './gradient-clock.component.html',
  styleUrls: ['./gradient-clock.component.css']
})
export class GradientClockComponent {
  time: string = '';

  constructor() {
    setInterval(() => {
      const now = new Date();
      this.time = now.toLocaleTimeString();
    }, 1000);
  }
}
