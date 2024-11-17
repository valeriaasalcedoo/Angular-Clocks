import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hourglass-clock',
  standalone: true,
  templateUrl: './hourglass-clock.component.html',
  styleUrls: ['./hourglass-clock.component.css']
})
export class HourglassClockComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  startTime: number = 86400; // 24 horas en segundos
  remainingTime: number = this.startTime;

  ngOnInit() {
    const ctx = this.canvas.nativeElement.getContext('2d')!;
    setInterval(() => {
      const currentTime = new Date();
      this.updateRemainingTime(currentTime);
      this.drawHourglass(ctx);
    }, 100);
  }

  updateRemainingTime(currentTime: Date) {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    this.remainingTime = (23 - hours) * 3600 + (59 - minutes) * 60 + (60 - seconds);
  }

  drawHourglass(ctx: CanvasRenderingContext2D) {
    const centerX = 150;
    const centerY = 200;
    const topWidth = 120;
    const bottomWidth = 60;
    const height = 250;
    
    ctx.clearRect(0, 0, 300, 400);

    // Dibujar contorno del reloj de arena con curvas suaves
    ctx.beginPath();
    ctx.moveTo(centerX - topWidth / 2, centerY - height / 2);
    ctx.bezierCurveTo(centerX - topWidth / 4, centerY - height / 4, centerX - bottomWidth / 4, centerY + height / 4, centerX - bottomWidth / 2, centerY + height / 2);
    ctx.lineTo(centerX + bottomWidth / 2, centerY + height / 2);
    ctx.bezierCurveTo(centerX + bottomWidth / 4, centerY + height / 4, centerX + topWidth / 4, centerY - height / 4, centerX + topWidth / 2, centerY - height / 2);
    ctx.closePath();

    ctx.fillStyle = '#f4f4f6';
    ctx.strokeStyle = '#0077b6';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fill();

    // Dibujar arena en la parte superior
    const sandHeightTop = (this.remainingTime / this.startTime) * (height / 2 - 20);
    ctx.fillStyle = '#ffc107';
    ctx.fillRect(centerX - topWidth / 4, centerY - height / 2 + 10, topWidth / 2, sandHeightTop);

    // Dibujar arena en la parte inferior
    const sandHeightBottom = ((this.startTime - this.remainingTime) / this.startTime) * (height / 2 - 20);
    ctx.fillRect(centerX - bottomWidth / 4, centerY + height / 2 - sandHeightBottom - 10, bottomWidth / 2, sandHeightBottom);

    // Dibujar arena cayendo
    const particlesCount = Math.min(8, Math.floor((this.startTime - this.remainingTime) / 3600));
    for (let i = 0; i < particlesCount; i++) {
      const x = centerX + Math.random() * 4 - 2;
      const y = centerY + Math.random() * 20 - 10;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#ffc107';
      ctx.fill();
    }
  }
}
