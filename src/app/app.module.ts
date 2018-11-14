import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    //HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
