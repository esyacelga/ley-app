import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { TabsPageModule } from './tabs/tabs.module';
import { AuthGuardHomeService } from './guards/seguridad/home/auth-guard-home.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent],
            entryComponents: [],
            imports: [TabsPageModule, CommonModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, HttpClientJsonpModule, IonicStorageModule.forRoot()],
            providers: [
                AuthGuardHomeService,
                StatusBar,
                OneSignal,
                Geolocation,
                SplashScreen,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map