import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuardHomeService } from './guards/seguridad/home/auth-guard-home.service';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuardHomeService]
    },
    { path: 'signin', loadChildren: './pages/login/signin/signin.module#SigninPageModule' },
    { path: 'register', loadChildren: './pages/login/register/register.module#RegisterPageModule' },
    { path: 'password/:id', loadChildren: './pages/login/password/password.module#PasswordPageModule' },
    { path: 'log/:mensaje', loadChildren: './pages/system/log/log.module#LogPageModule' },
    { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map