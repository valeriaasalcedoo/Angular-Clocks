import { Component } from '@angular/core';

@Component({
  selector: 'app-retro-clock',
  standalone: true,
  templateUrl: './retro-clock.component.html',
  styleUrls: ['./retro-clock.component.css']
})
export class RetroClockComponent {
  time: string = '';

  constructor() {
    setInterval(() => {
      const now = new Date();
      this.time = now.toLocaleTimeString();
    }, 1000);
  }
}
