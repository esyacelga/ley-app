import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuardHomeService} from './guards/seguridad/home/auth-guard-home.service';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuardHomeService]
    },
    {path: 'signin', loadChildren: './pages/login/signin/signin.module#SigninPageModule'},
    {path: 'register', loadChildren: './pages/login/register/register.module#RegisterPageModule'},
    {path: 'password/:id', loadChildren: './pages/login/password/password.module#PasswordPageModule'},
    {path: 'log/:mensaje', loadChildren: './pages/system/log/log.module#LogPageModule'},

    {path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'}


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
