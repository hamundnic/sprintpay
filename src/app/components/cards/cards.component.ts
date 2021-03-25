import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
@Input('card') cards:any;
@Input('position') Positions:any;
@Input() wallet:any;
images:any=[

      {
      'title':'secure',
      'img':'../../../assets/img/logo.jpg',
      'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perspiciatis sed earum nisi repudiandae illum, illo beatae modi excepturi obcaecati dignissimos aliquid! Quaerat dicta ratione repudiandae placeat! Quidem, laboriosam deleniti.',

    },
    {
      'title':'mining',
      'img':'../../../assets/img/mining.png',
      'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perspiciatis sed earum nisi repudiandae illum, illo beatae modi excepturi obcaecati dignissimos aliquid! Quaerat dicta ratione repudiandae placeat! Quidem, laboriosam deleniti.',

    },
    {
      'title':'instant transaction',
      'img':'../../../assets/img/Instant.png',
      'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perspiciatis sed earum nisi repudiandae illum, illo beatae modi excepturi obcaecati dignissimos aliquid! Quaerat dicta ratione repudiandae placeat! Quidem, laboriosam deleniti.',

    },
    {
      'wallets': [
      {
        'title':'Windows Wallet',
        'img':'../../../assets/img/Windows.svg',
        'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit.',

      },
      {
        'title':'Linux Wallet',
        'img':'../../../assets/img/linux.svg',
        'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',

      },
      {
        'title':'Mac Wallet',
        'img':'../../../assets/img/apple1.svg',
        'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',

      },
      {
        'title':'Android Wallet',
        'img':'../../../assets/img/logo-android.svg',
        'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',

      }
    ]
    }



  ];
constructor(){

}
  ngOnInit(): void {

  }

}
