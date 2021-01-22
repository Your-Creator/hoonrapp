import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
{
  path:"",
  component:HomeComponent,
  pathMatch:"full",
}
,
{
  path:"Services",
  component:ServicesComponent,
  pathMatch:"full",
}
,
{
  path:"About",
  component:AboutComponent,
  pathMatch:"full",
}
,
{
  path:"Contact",
  component:ContactComponent,
  pathMatch:"full",
}
,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
