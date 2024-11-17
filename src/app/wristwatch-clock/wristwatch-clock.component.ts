import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-wristwatch-clock',
  standalone: true,
  templateUrl: './wristwatch-clock.component.html',
  styleUrls: ['./wristwatch-clock.component.css']
})
export class WristwatchClockComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit() {
    const ctx = this.canvas.nativeElement.getContext('2d')!;
    setInterval(() => this.drawClock(ctx), 1000);
  }

  drawClock(ctx: CanvasRenderingContext2D) {
    const now = new Date();
    const centerX = 200;
    const centerY = 200;
    const radius = 180;

    ctx.clearRect(0, 0, 400, 400);

    // Fondo del reloj
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#f0f0f0';
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Dibujar los números
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let num = 1; num <= 12; num++) {
      const angle = (num * Math.PI) / 6;
      const x = centerX + Math.cos(angle - Math.PI / 2) * (radius - 30);
      const y = centerY + Math.sin(angle - Math.PI / 2) * (radius - 30);
      ctx.fillText(num.toString(), x, y);
    }

    // Dibujar subdiales
    this.drawSubDial(ctx, centerX - 60, centerY - 60, 30, now.getSeconds(), 'Seg');
    this.drawSubDial(ctx, centerX + 60, centerY - 60, 30, now.getMinutes(), 'Min');
    this.drawSubDial(ctx, centerX, centerY + 60, 30, now.getHours() % 12, 'Hora');

    // Dibujar manecillas
    this.drawHand(ctx, centerX, centerY, (now.getHours() % 12) * 30 + (now.getMinutes() / 2), radius * 0.5, 8);
    this.drawHand(ctx, centerX, centerY, now.getMinutes() * 6, radius * 0.7, 6);
    this.drawHand(ctx, centerX, centerY, now.getSeconds() * 6, radius * 0.9, 2, '#ff0000');

    // Reloj digital en la parte inferior
    const digitalTime = now.toLocaleTimeString();
    ctx.font = '16px Arial';
    ctx.fillStyle = '#333';
    ctx.fillText(digitalTime, centerX, centerY + 120);
  }

  drawSubDial(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, value: number, label: string) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.font = 'bold 12px Arial';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(value.toString(), x, y);

    ctx.font = '10px Arial';
    ctx.fillText(label, x, y + 20);
  }

  drawHand(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    angle: number,
    length: number,
    width: number,
    color: string = '#000'
  ) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.moveTo(x, y);
    ctx.lineTo(
      x + Math.cos((angle - 90) * (Math.PI / 180)) * length,
      y + Math.sin((angle - 90) * (Math.PI / 180)) * length
    );
    ctx.stroke();
  }
}
