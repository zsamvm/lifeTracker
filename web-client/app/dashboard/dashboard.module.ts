import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';

import { DashboardComponent } from './dashboard.component';

import { ListViewComponent } from './components/list-view/list-view.component';
import { TileViewComponent } from './components/tile-view/tile-view.component';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports:      [ CommonModule, DashboardRoutingModule ],
  declarations:      [
    DashboardComponent,
    ListViewComponent,
    TileViewComponent
  ]
})

export class DashboardModule { }
