import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllEmojiComponent } from './component/all-emoji/all-emoji.component';
import { FavoriteEmojiComponent } from './component/favorite-emoji/favorite-emoji.component';
import { RemoteEmojiComponent } from './component/remote-emoji/remote-emoji.component';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStategy } from './route-reuse-stratege';

@NgModule({
  declarations: [
    AppComponent,
    AllEmojiComponent,
    FavoriteEmojiComponent,
    RemoteEmojiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule, 
    FlexLayoutModule,
  ],
  providers: [ {provide: RouteReuseStrategy, useClass: CustomRouteReuseStategy} ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

 }
