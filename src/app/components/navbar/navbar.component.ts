import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 buttons:string[];
  constructor() {
    this.buttons=['specifications','docs','wallets','roadmap','exchanges','about','contact']
   }

  ngOnInit(): void {
  }

}
