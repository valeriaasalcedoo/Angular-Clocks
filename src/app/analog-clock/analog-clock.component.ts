import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  standalone: true,
  template: `<canvas #canvas width="200" height="200"></canvas>`,
  styleUrls: ['./analog-clock.component.css'] // Cambia styles por styleUrls
})
export class AnalogClockComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit() {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000); // Actualiza cada segundo
  }

  updateClock() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Limpia el canvas
    ctx.clearRect(0, 0, 200, 200);

    // Dibuja el círculo del reloj
    ctx.beginPath();
    ctx.arc(100, 100, 90, 0, Math.PI * 2);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 8;
    ctx.stroke();

    // Dibuja las manecillas
    this.drawHand(ctx, (hours % 12) * 30 + minutes / 2, 50, 5); // Manecilla de las horas
    this.drawHand(ctx, minutes * 6, 70, 3); // Manecilla de los minutos
    this.drawHand(ctx, seconds * 6, 90, 1); // Manecilla de los segundos
  }

  drawHand(ctx: CanvasRenderingContext2D, angle: number, length: number, width: number) {
    ctx.save();
    ctx.translate(100, 100); // Mueve el origen al centro del reloj
    ctx.rotate((Math.PI / 180) * angle); // Rota el canvas según el ángulo de la manecilla
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -length);
    ctx.lineWidth = width;
    ctx.strokeStyle = '#333';
    ctx.stroke();
    ctx.restore();
  }
}
