import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LiveReportsComponent } from './components/live-reports/live-reports.component';
import { CryptCardComponent } from './components/crypt-card/crypt-card.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalChooseALotComponent } from './components/modal-choose-a-lot/modal-choose-a-lot.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LiveReportsComponent,
    CryptCardComponent,
    MoreInfoComponent,
    ModalChooseALotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule 
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ModalChooseALotComponent,HomeComponent,CryptCardComponent]
})
export class AppModule { }
