import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectorRef, Component, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { Subject } from 'rxjs';
import 'charts.css';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = `First page`;
  itemsPerPageLabel = `Items per page:`;
  lastPageLabel = `Last page`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Page ${page + 1} of ${amountPages}`;
  }
}

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatIconModule,
    NgOptimizedImage,
    HttpClientModule,
  ],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
})
export class BarChartComponent {
  length = 12;
  pageSize = 1;
  condition!: boolean;
  size: Array<number> = [];
  icon!: string;
  total: any;

  constructor(
    private cdRef: ChangeDetectorRef,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'a',
      sanitizer.bypassSecurityTrustResourceUrl('assets/a.svg')
    );
    iconRegistry.addSvgIcon(
      'b',
      sanitizer.bypassSecurityTrustResourceUrl('assets/b.svg')
    );
    iconRegistry.addSvgIcon(
      'c',
      sanitizer.bypassSecurityTrustResourceUrl('assets/c.svg')
    );
  }

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
    this.total = 0;
    for (let i = 0; i < 12; i++) {
      let tempMonthVal = Math.floor(Math.random() * 10) + 1;
      this.total += tempMonthVal;
      temp.push(tempMonthVal / 10);
    }

    if (this.total > 70) {
      this.icon = 'a';
    } else if (this.total > 60) {
      this.icon = 'b';
    } else {
      this.icon = 'c';
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
  handlePageEvent(e: PageEvent) {
    this.randomize();
  }
}
