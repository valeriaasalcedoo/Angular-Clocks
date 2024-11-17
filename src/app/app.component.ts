import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Importa todos los componentes
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { AstronomicalClockComponent } from './astronomical-clock/astronomical-clock.component';
import { BarClockComponent } from './bar-clock/bar-clock.component';
import { BinaryClockComponent } from './binary-clock/binary-clock.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { FlipClockComponent } from './flip-clock/flip-clock.component';
import { GradientClockComponent } from './gradient-clock/gradient-clock.component';
import { HourglassClockComponent } from './hourglass-clock/hourglass-clock.component';
import { ProgressClockComponent } from './progress-clock/progress-clock.component';
import { RetroClockComponent } from './retro-clock/retro-clock.component';
import { TextClockComponent } from './text-clock/text-clock.component';
import { WristwatchClockComponent } from './wristwatch-clock/wristwatch-clock.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AnalogClockComponent,
    DigitalClockComponent,
    ProgressClockComponent,
    TextClockComponent,
    FlipClockComponent,
    RetroClockComponent,
    BinaryClockComponent,
    BarClockComponent,
    GradientClockComponent,
    WristwatchClockComponent,
    AstronomicalClockComponent,
    HourglassClockComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedClock: string = 'digital'; // Valor inicial

  clocks = [
    { value: 'digital', label: 'Digital' },
    { value: 'analog', label: 'Analógico' },
    { value: 'progress', label: 'Reloj de Progreso' },
    { value: 'text', label: 'Reloj de Texto' },
    { value: 'flip', label: 'Flip Clock' },
    { value: 'retro', label: 'Digital Retro' },
    { value: 'binary', label: 'Reloj Binario' },
    { value: 'bar', label: 'Barras de Progreso' },
    { value: 'gradient', label: 'Gradiente Dinámico' },
    { value: 'wristwatch', label: 'Reloj de Relojería' },
    { value: 'astronomical', label: 'Reloj Astronómico' },
    { value: 'hourglass', label: 'Reloj de Hora' },
  ];
}
