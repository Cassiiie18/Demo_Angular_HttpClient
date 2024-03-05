import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/movie/list/list.component';
import { LoginComponent } from './components/user/login/login.component';
import { UlistComponent } from './components/user/ulist/ulist.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    UlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
