import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UsersService } from './shared/services/user.service';
import { AuthService } from './shared/services/auth.service';
import { UrlInterceptor } from './shared/interceptor/url.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [UsersService, AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
