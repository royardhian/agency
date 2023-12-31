import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { register } from 'swiper/element/bundle';
import { ChartjsComponent } from './dashboard/chartjs/chartjs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    BarChartComponent,
    CardComponent,
    DashboardComponent,
    ChartjsComponent,
  ],
})
export class AppComponent {
  title = 'agency';
}
