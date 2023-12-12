import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import 'charts.css';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatGridListModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent {
  condition!: boolean;
  size: Array<number> = [];
  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.size = [];

    this.condition = false;
  }

  ngAfterContentInit(): void {
    this.randomize();
  }

  randomize() {
    this.size = [];

    this.cdRef.detectChanges();

    let temp = [];
    for (let i = 0; i < 12; i++) {
      temp.push((Math.floor(Math.random() * 10) + 1) / 10);
    }

    this.size = temp;
  }
  randomize2() {
    this.size = [];

    let temp = [];
    for (let i = 0; i < 12; i++) {
      temp.push((Math.floor(Math.random() * 10) + 1) / 10);
    }
  }
}
