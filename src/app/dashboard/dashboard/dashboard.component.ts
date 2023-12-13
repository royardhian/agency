import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { register } from 'swiper/element/bundle';
import { MatCardModule } from '@angular/material/card';
import { Card } from '../../models/card.model';
import { CommonModule } from '@angular/common';
import SwiperComponent, { Swiper } from 'swiper';
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
  @ViewChild('newSwiper', { static: false }) swiperRef: any;
  swiper?: Swiper;

  pageSize = 1;

  jancok: any = {
    injectStyles: [
      `
      .swiper-button-next, .swiper-button-prev {
        position: absolute;
        top: var(--swiper-navigation-top-offset,170px);
      }
    `,
    ],
    slidesPerView: 1,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6,
      },
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
    for (let index = 0; index < 10; index++) {
      const card: Card = {
        title: 'APE',
        description: '1000',
        url: '',
      };

      this.contents.push(card);
    }
    console.log(this.swiperRef?.nativeElement.swiper?.snapGrid?.length);

    this.swiper = this.swiperRef?.nativeElement.swiper;
    console.log(this.swiper?.activeIndex);

    Object.assign(this.swiperRef?.nativeElement, this.jancok);

    this.swiperRef?.nativeElement.initialize();
    this.cdRef.detectChanges();
  }

  ngAfterContentInit(): void {}

  ngAfterViewInit(): void {
    this.setCard();
  }

  handlePageEvent(e: PageEvent) {
    console.log(this.swiperRef?.nativeElement.swiper.snapGrid.length);

    this.swiperRef?.nativeElement.swiper.slideTo(e.pageIndex);
  }
}
