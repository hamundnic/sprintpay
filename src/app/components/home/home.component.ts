import { Title } from './../../interfaces/title';
import { Component, OnInit } from '@angular/core';
/*import SwiperCore, { Navigation, Pagination, Scrollbar, Swiper,EffectCube,Autoplay } from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar,EffectCube,Autoplay]);*/
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
right:boolean= true;

  constructor() {


  }

  ngOnInit(): void {

  }

}
