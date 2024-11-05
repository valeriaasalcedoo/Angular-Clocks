import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-clock',
  standalone: true,
  templateUrl: './progress-clock.component.html',
  styleUrls: ['./progress-clock.component.css']
})
export class ProgressClockComponent implements OnInit {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  currentHours: number = 0;
  currentMinutes: number = 0;
  currentSeconds: number = 0;

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000); // Actualiza cada segundo
  }

  updateTime() {
    const now = new Date();
    this.currentHours = now.getHours();
    this.currentMinutes = now.getMinutes();
    this.currentSeconds = now.getSeconds();

    this.hours = (this.currentHours / 24) * 100; // Progreso en porcentaje para 24 horas
    this.minutes = (this.currentMinutes / 60) * 100; // Progreso en porcentaje para 60 minutos
    this.seconds = (this.currentSeconds / 60) * 100; // Progreso en porcentaje para 60 segundos
  }
}
