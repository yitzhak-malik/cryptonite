import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LiveReportsComponent } from './components/live-reports/live-reports.component';



const routes: Routes = [ 
{path:'',component:HomeComponent},
{path:'liveReports',component:LiveReportsComponent},
{path:'about',component:AboutComponent},
{path:'search/:coin',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 