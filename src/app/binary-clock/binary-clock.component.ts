import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-clock',
  standalone: true,
  templateUrl: './binary-clock.component.html',
  styleUrls: ['./binary-clock.component.css']
})
export class BinaryClockComponent implements OnInit {
  time: string = '';

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    const hours = now.getHours().toString(2).padStart(8, '0');
    const minutes = now.getMinutes().toString(2).padStart(8, '0');
    const seconds = now.getSeconds().toString(2).padStart(8, '0');
    this.time = `${hours}:${minutes}:${seconds}`;
  }
}
