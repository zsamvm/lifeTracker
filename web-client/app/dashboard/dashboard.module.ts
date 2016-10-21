import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';

import { DashboardComponent } from './dashboard.component';

import { ListViewComponent } from './list-view/list-view.component';
import { TileViewComponent } from './tile-view/tile-view.component';

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
