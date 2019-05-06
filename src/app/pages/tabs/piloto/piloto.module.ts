import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {PilotoPage} from './piloto.page';
import {FilterPipeModule} from 'ngx-filter-pipe';

const routes: Routes = [
    {
        path: '',
        component: PilotoPage
    }
];

@NgModule({
    imports: [
        FilterPipeModule,
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PilotoPage]
})
export class PilotoPageModule {
}
