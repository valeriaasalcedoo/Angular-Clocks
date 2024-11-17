import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-astronomical-clock',
  standalone: true,
  templateUrl: './astronomical-clock.component.html',
  styleUrls: ['./astronomical-clock.component.css']
})
export class AstronomicalClockComponent implements OnInit {
  hoursRotation: number = 0;
  minutesRotation: number = 0;
  secondsRotation: number = 0;
  date: string = '';
  zodiacSign: string = '';

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    this.hoursRotation = (now.getHours() % 12) * 30 + (now.getMinutes() / 2);
    this.minutesRotation = now.getMinutes() * 6;
    this.secondsRotation = now.getSeconds() * 6;
    this.date = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    this.zodiacSign = this.getZodiacSign(now);
  }

  getZodiacSign(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return '♈ Aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return '♉ Taurus';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return '♊ Gemini';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return '♋ Cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return '♌ Leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return '♍ Virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return '♎ Libra';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return '♏ Scorpio';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return '♐ Sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return '♑ Capricorn';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return '♒ Aquarius';
    return '♓ Pisces';
  }
}
