//import { SwiperOptions } from 'swiper/core';
import { Component, OnInit,Input, AfterViewInit } from '@angular/core';
//import SwiperCore, { Navigation, Pagination, Scrollbar, Swiper,EffectFade,Controller} from 'swiper/core';
//SwiperCore.use([Navigation, Pagination, Scrollbar,Controller]);
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit,AfterViewInit {

config: SwiperOptions = {
  spaceBetween: 30,
  speed: 1500,
  effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

  constructor() {



}



  ngOnInit(): void {
}

ngAfterViewInit(){


}

}
;
