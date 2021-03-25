import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit,AfterViewInit {
swiper2:SwiperOptions={

  speed: 2500,
  effect: 'cube',
  grabCursor: true,
  loop: true,
  longSwipes:true,
  longSwipesMs: 5000,
  longSwipesRatio:1.5,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },

};
  constructor() {



   }

  ngOnInit() {


}
ngAfterViewInit(){

}
}
