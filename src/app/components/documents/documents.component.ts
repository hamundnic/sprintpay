import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  swiper:any;
  constructor() { }

  ngOnInit(): void {

    this.swiper= new Swiper('.swiper-container', {
      direction: 'vertical',
       spaceBetween: 10,
      slidesPerView: 'auto',

      freeMode: true,

      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });
  }

}
