import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { DashboardModule } from './dashboard/dashboard.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    DashboardModule
  ],
  declarations:      [ AppComponent ],
  bootstrap:      [ AppComponent ]
})

export class AppModule { }
