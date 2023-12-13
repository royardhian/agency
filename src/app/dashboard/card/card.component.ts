import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatPaginatorModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  length = 12;
  pageSize = 1;
  handlePageEvent(e: PageEvent) {}
}
