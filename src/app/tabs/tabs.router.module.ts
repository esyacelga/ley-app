import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';
//{ path: 'configuracion', loadChildren: './pages/tabs/configuracion/configuracion.module#ConfiguracionPageModule' }
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
                        loadChildren: '../pages/tabs/produccion/produccion.module#ProduccionPageModule'
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
                        loadChildren: '../pages/tabs/qa/qa.module#QAPageModule'
                    }
                ]
            },
            {
                path: 'piloto',
                children: [
                    {
                        path: '',
                        loadChildren: '../pages/tabs/piloto/piloto.module#PilotoPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/produccion',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/produccion',
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
