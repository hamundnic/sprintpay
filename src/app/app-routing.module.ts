import { SpecificationsComponent } from './components/specifications/specifications.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'home', component: HomeComponent },
  {path:'about', component: AboutComponent },
  {path:'contact', component: ContactComponent },
  {path:'wallets', component: WalletComponent },
  {path:'exchanges', component: ExchangeComponent },
  {path:'roadmap', component: RoadmapComponent },
  {path:'docs', component: DocumentsComponent },
  {path:'specifications', component: SpecificationsComponent },
  {path:'**', pathMatch:'full',redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
