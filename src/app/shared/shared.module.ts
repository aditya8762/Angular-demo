import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RightsidebarComponent } from './components/rightsidebar/rightsidebar.component';
import { FooterComponent } from './components/footer/footer.component';

import { NbActionsModule, NbAlertModule, NbCardModule, NbChatModule, NbContextMenuModule, NbIconModule, NbLayoutModule, NbMenuModule, NbOptionModule, NbProgressBarModule, NbSearchModule, NbSelectModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AreaComponent } from './widgets/area/area.component';
import { DonutComponent } from './widgets/donut/donut.component';
import { NumbercardComponent } from './widgets/numbercard/numbercard.component';
import { PieComponent } from './widgets/pie/pie.component';
import { PiegridComponent } from './widgets/piegrid/piegrid.component';
import { ProgressbarComponent } from './widgets/progressbar/progressbar.component';
import { Piegrid2Component } from './widgets/piegrid/piegrid2.component';
import { Piegrid3Component } from './widgets/piegrid/piegrid3.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    RightsidebarComponent,
    FooterComponent,
    AreaComponent,
    DonutComponent,
    NumbercardComponent,
    PieComponent,
    PiegridComponent,
    Piegrid2Component,
    Piegrid3Component,
    ProgressbarComponent
    
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbUserModule,
    NbActionsModule,
    NbIconModule,
    NbSearchModule,
    NbTabsetModule,
    NbLayoutModule,
    NbMenuModule,
    FlexLayoutModule,
    NbSelectModule,
    NbOptionModule,
    NbContextMenuModule,
    NbEvaIconsModule,
    NbProgressBarModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NbAlertModule,
    NbChatModule,
    NgApexchartsModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    RightsidebarComponent,
    FooterComponent,
    AreaComponent,
    DonutComponent,
    NumbercardComponent,
    PieComponent,
    PiegridComponent,
    Piegrid2Component,
    Piegrid3Component,
    ProgressbarComponent
  ]
})
export class SharedModule { }
