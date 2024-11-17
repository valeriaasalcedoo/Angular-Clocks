import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-clock',
  standalone: true,
  templateUrl: './flip-clock.component.html',
  styleUrls: ['./flip-clock.component.css']
})
export class FlipClockComponent implements OnInit {
  hours: string = '';
  minutes: string = '';
  seconds: string = '';

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    this.hours = String(now.getHours()).padStart(2, '0');
    this.minutes = String(now.getMinutes()).padStart(2, '0');
    this.seconds = String(now.getSeconds()).padStart(2, '0');
  }
}
