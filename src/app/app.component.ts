import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { CardComponent } from './dashboard/card/card.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, BarChartComponent, CardComponent ]
})
export class AppComponent {
  title = 'agency';

}
