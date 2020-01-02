import {NgModule} from '@angular/core';
import {PAGES_ROUTES} from './pages.routes';

import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PagesComponent} from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {AppModule} from '../app.module';
import {IncreaserComponent} from '../components/increaser/increaser.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncreaserComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ]
})
export class PagesModule {}
