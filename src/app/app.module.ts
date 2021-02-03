import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { RefrigerationComponent } from './refrigeration/refrigeration.component';
import { DishwasherComponent } from './dishwasher/dishwasher.component';
import { DryersWashersComponent } from './dryers-washers/dryers-washers.component';
import { StovesComponent } from './stoves/stoves.component';
import { AppliancesComponent } from './appliances/appliances.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    ContactComponent,
    RefrigerationComponent,
    DishwasherComponent,
    DryersWashersComponent,
    StovesComponent,
    AppliancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
