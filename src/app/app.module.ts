import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { RefrigerationComponent } from './refrigeration/refrigeration.component';
import { DishwasherComponent } from './dishwasher/dishwasher.component';
import { DryersWashersComponent } from './dryers-washers/dryers-washers.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    HomepageComponent,
    HeaderComponent,
    ContactComponent,
    RefrigerationComponent,
    DishwasherComponent,
    DryersWashersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
