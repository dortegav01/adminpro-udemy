import {NgModule} from '@angular/core';
import {PAGES_ROUTES} from './pages.routes';

// ng2 charts
import { ChartsModule } from 'ng2-charts';

import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PagesComponent} from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {AppModule} from '../app.module';
import {IncreaserComponent} from '../components/increaser/increaser.component';
import {GraficoDonaComponent} from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncreaserComponent,
    GraficoDonaComponent,
    AccountSettingComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ]
})
export class PagesModule {}
