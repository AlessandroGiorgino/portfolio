import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InViewportModule } from 'ng-in-viewport';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { FooterComponent } from './home/footer/footer/footer.component';
import { MainSectionComponent } from './home/main-section/main-section.component';
import { NavbarComponent } from './home/navbar/navbar/navbar.component';
import { HighlightDirective } from './customDirectives/highlight.directive';
import { TrackVisibilityDirective } from './customDirectives/track-visibility.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainSectionComponent,
    NavbarComponent,
    HighlightDirective,
    TrackVisibilityDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, InViewportModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
