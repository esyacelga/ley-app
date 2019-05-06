import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';
import {AuthGuardHomeService} from '../guards/seguridad/home/auth-guard-home.service';

const routes: Routes = [
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

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
