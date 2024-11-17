import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-clock.component.html',
  styleUrls: ['./text-clock.component.css']
})
export class TextClockComponent implements OnInit {
  time: string = '';
  date: string = '';

  constructor() {
    this.updateTime();
  }

  ngOnInit() {
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    this.time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    this.date = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }).toUpperCase();
  }
}
