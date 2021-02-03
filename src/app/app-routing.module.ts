import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { RefrigerationComponent } from './refrigeration/refrigeration.component';
import { DishwasherComponent } from './dishwasher/dishwasher.component';
import { DryersWashersComponent } from './dryers-washers/dryers-washers.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { StovesComponent } from './stoves/stoves.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: 'refrigeration', component: RefrigerationComponent },
  { path: 'dishwashers', component: DishwasherComponent },
  { path: 'dryers-washers', component: DryersWashersComponent },
  { path: 'appliances', component: AppliancesComponent },
  { path: 'stoves', component: StovesComponent },
  { path: 'contact', component: ContactComponent },


  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route for www.site.com
  { path: '**', redirectTo: '/home'} // Redirects any unknown url to home. MUST BE LAST
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
