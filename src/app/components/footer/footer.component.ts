import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 years:number;
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
   /* this.matIconRegistry.addSvgIcon(
      `discord`,
      `../../../assets/img/Social-Icons/discord.svg`
    );*/
    this.matIconRegistry.addSvgIcon(
      "facebook",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/img/Social-Icons/facebook.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "discord",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/img/Social-Icons/discord.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "twitter",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/img/Social-Icons/twitter.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/img/Social-Icons/github.svg")
    );

  }


  ngOnInit(): void {
    this.years= new Date().getFullYear();
  }


}
