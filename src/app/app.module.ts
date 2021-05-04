import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LayoutComponent as AdminLayout } from './admin/layout/layout.component';
import { LayoutComponent as UserLayout } from './user/layout/layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NebularModule } from './modules/nebular/nebular.module';
import { SigninComponent } from './authentication/signin/signin.component';

import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { LayoutComponent } from './authentication/layout/layout.component';
import { HomeComponent } from './home/home.component';

import { FooterComponent } from './footer/footer.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NgsRevealModule } from 'ngx-scrollreveal';

import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { app_config } from 'src/config';
import { AddNovelComponent } from './user/add-novel/add-novel.component';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ManageNovelsComponent } from './user/manage-novels/manage-novels.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ListRentComponent } from './authentication/list-rent/list-rent.component';
import { ListExchangeComponent } from './authentication/list-exchange/list-exchange.component';
import { ListSellComponent } from './authentication/list-sell/list-sell.component';
import { NovelDetailsComponent } from './authentication/novel-details/novel-details.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayout,
    UserLayout,
    DashboardComponent,
    SigninComponent,

    ResetPasswordComponent,
    LayoutComponent,
    HomeComponent,

    FooterComponent,
    AddNovelComponent,
    ManageUserComponent,
    ManageNovelsComponent,
    ListRentComponent,
    ListExchangeComponent,
    ListSellComponent,
    NovelDetailsComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),

    NebularModule,
    SweetAlert2Module.forRoot(),
    MatFormFieldModule,
    MatInputModule,

    NgsRevealModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule,
    MatCheckboxModule,
    MatTabsModule,


  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(app_config.OAuthID),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
