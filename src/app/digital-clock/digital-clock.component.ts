import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  standalone: true,
  template: `<div class="digital-clock">{{ time }}</div>`,
  styleUrls: ['./digital-clock.component.css'] // Cambia styles por styleUrls
})
export class DigitalClockComponent implements OnInit {
  time: string = '';

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000); // Actualiza cada segundo
  }

  updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    this.time = `${hours}:${minutes}:${seconds}`;
  }
}
