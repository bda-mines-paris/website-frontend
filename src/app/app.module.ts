import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {NgxImageCompressService} from 'ngx-image-compress';

import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AuthInterceptor } from './interceptors/auth-interceptor';

import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './register/form/form.component';
import { VerifyEmailComponent } from './register/verify-email/verify-email.component';
import { InfosRegisterComponent } from './register/infos-register/infos-register.component';
import { PopupComponent } from './popup/popup.component';
import { AccountComponent } from './account/account.component';
import { AccountViewComponent } from './account/account-view/account-view.component';
import { BilletterieComponent } from './billetterie/billetterie.component';
import { DisplayPlaceComponent } from './account/display-place/display-place.component';
import { CreateBilletterieComponent } from './billetterie/create/createbilletterie.component';
import { MasterclassComponent } from './masterclass/masterclass.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HeaderComponent,
    FooterComponent,
    UserInfosComponent,
    LoginComponent,
    PopupComponent,
    RegisterComponent,
    FormComponent,
    VerifyEmailComponent,
    InfosRegisterComponent,
    AccountComponent,
    AccountViewComponent,
    BilletterieComponent,
    DisplayPlaceComponent,
    CreateBilletterieComponent,
    MasterclassComponent,
    CalendarComponent,
  ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,
  ],
  providers: [NgxImageCompressService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
