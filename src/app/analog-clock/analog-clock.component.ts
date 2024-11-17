import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  standalone: true,
  template: `<canvas #canvas width="300" height="300"></canvas>`,
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit() {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    ctx.clearRect(0, 0, 300, 300);

    // Fondo del reloj
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, 300, 300);

    // Dibuja el borde del reloj
    ctx.beginPath();
    ctx.arc(150, 150, 140, 0, Math.PI * 2);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 8;
    ctx.stroke();

    // Dibuja los números del reloj
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let num = 1; num <= 12; num++) {
      const angle = (num * Math.PI) / 6;
      const x = 150 + Math.cos(angle - Math.PI / 2) * 110;
      const y = 150 + Math.sin(angle - Math.PI / 2) * 110;
      ctx.fillStyle = '#000';
      ctx.fillText(num.toString(), x, y);
    }

    // Dibuja las marcas de los minutos
    for (let i = 0; i < 60; i++) {
      const angle = (i * Math.PI) / 30;
      const x1 = 150 + Math.cos(angle) * 125;
      const y1 = 150 + Math.sin(angle) * 125;
      const x2 = 150 + Math.cos(angle) * 135;
      const y2 = 150 + Math.sin(angle) * 135;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = i % 5 === 0 ? '#000' : '#666';
      ctx.lineWidth = i % 5 === 0 ? 3 : 1;
      ctx.stroke();
    }

    // Dibuja las manecillas
    this.drawHand(ctx, (hours % 12) * 30 + minutes / 2, 70, 8, '#000'); // Manecilla de las horas
    this.drawHand(ctx, minutes * 6, 100, 6, '#000'); // Manecilla de los minutos
    this.drawHand(ctx, seconds * 6, 120, 2, '#D32F2F'); // Manecilla de los segundos
  }

  drawHand(
    ctx: CanvasRenderingContext2D,
    angle: number,
    length: number,
    width: number,
    color: string
  ) {
    ctx.save();
    ctx.translate(150, 150);
    ctx.rotate((Math.PI / 180) * angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -length);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.restore();
  }
}
