import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { OfferComponent } from './offer/offer.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    TeamComponent,
    ContactComponent,
    OfferComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class AdminModule { }
