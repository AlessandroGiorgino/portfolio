import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { FooterComponent } from './home/footer/footer/footer.component';
import { MainSectionComponent } from './home/main-section/main-section.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, MainSectionComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
