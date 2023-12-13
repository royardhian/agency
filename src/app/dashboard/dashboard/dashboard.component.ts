import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { register } from 'swiper/element/bundle';
import { MatCardModule } from '@angular/material/card';
import { Card } from '../../models/card.model';
import { CommonModule } from '@angular/common';
import SwiperComponent from 'swiper';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [MatCardModule, MatPaginatorModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  contents: Card[] = [];
  index = 0;
  @ViewChild('newSwiper', { static: false }) swiperRef!: any;

  pageSize = 1;
  totalSize = 10;

  jancok: any = {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
  };
  prev: boolean = false;
  next: boolean = false;
  activeIndex: number = 0;

  constructor(private cdRef: ChangeDetectorRef) {
    register();
    this.contents = [];
  }

  setCard(): void {
    for (let index = 0; index < this.totalSize; index++) {
      const card: Card = {
        title: 'APE',
        description: '1000',
        url: '',
      };

      this.contents.push(card);
    }
    console.log(this.swiperRef?.nativeElement.swiper.snapGrid.length);

    this.totalSize = this.swiperRef?.nativeElement.swiper.snapGrid.length;
    this.cdRef.detectChanges();
  }

  ngAfterContentInit(): void {}

  ngAfterViewInit(): void {
    this.setCard();
  }

  slideNext(index: number) {
    this.swiperRef?.nativeElement.swiper.slideTo(index);
  }

  slidePrev(index: number) {
    this.swiperRef?.nativeElement.swiper.slideTo(index);
  }

  handlePageEvent(e: PageEvent) {
    console.log(this.swiperRef?.nativeElement.swiper.snapGrid.length);

    this.swiperRef?.nativeElement.swiper.slideTo(e.pageIndex);
  }

  slide(flag: boolean) {
    this.activeIndex = this.swiperRef?.nativeElement.swiper.activeIndex;

    if (!flag) {
      if (this.activeIndex < this.totalSize) {
        this.swiperRef?.nativeElement.swiper.slideTo(this.activeIndex + 1);
      }
    } else {
      if (this.activeIndex > 0) {
        this.swiperRef?.nativeElement.swiper.slideTo(this.activeIndex - 1);
      }
    }
    this.activeIndex = this.swiperRef?.nativeElement.swiper.activeIndex;
  }
}
