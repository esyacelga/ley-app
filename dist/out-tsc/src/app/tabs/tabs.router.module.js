import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuardHomeService } from '../guards/seguridad/home/auth-guard-home.service';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'produccion',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/tabs/produccion/produccion.module#ProduccionPageModule', canActivate: [AuthGuardHomeService]
                    }
                ]
            },
            {
                path: 'configuracion',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/tabs/configuracion/configuracion.module#ConfiguracionPageModule'
                    }
                ]
            },
            {
                path: 'qa',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/tabs/qa/qa.module#QAPageModule', canActivate: [AuthGuardHomeService]
                    }
                ]
            },
            {
                path: 'piloto',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/tabs/piloto/piloto.module#PilotoPageModule', canActivate: [AuthGuardHomeService]
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/qa',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/qa',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map