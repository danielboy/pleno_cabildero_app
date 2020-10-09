import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopoverCuentaComponent } from './component/popover-cuenta/popover-cuenta.component';
import { NotaModal } from './noticias/details/detail';
import { IonicStorageModule } from '@ionic/storage';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/Authentication.service';



@NgModule({
  declarations: [AppComponent, PopoverCuentaComponent, NotaModal],
  entryComponents: [PopoverCuentaComponent, NotaModal],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    AuthGuardService,
    AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {}
