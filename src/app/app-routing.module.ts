import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { RefrigerationComponent } from './refrigeration/refrigeration.component';
import { DishwasherComponent } from './dishwasher/dishwasher.component';
import { DryersWashersComponent } from './dryers-washers/dryers-washers.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { StovesComponent } from './stoves/stoves.component';

const routes: Routes = [
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
