import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { NbActionsModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule, NbMenuService, NbSidebarModule, NbSidebarService, NbThemeModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NbLayoutModule,
    NbSidebarModule,
    NbThemeModule.forRoot({name:'dark'}),
    NbMenuModule.forRoot(),
    NbIconModule,
    NbCardModule,
    FlexLayoutModule,
    NbActionsModule
  ],
  providers: [
    NbSidebarService,
    NbMenuService
  ],

})
export class DefaultModule { }
