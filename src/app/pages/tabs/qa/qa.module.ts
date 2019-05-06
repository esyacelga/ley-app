import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {QAPage} from './qa.page';
import {FilterPipeModule} from 'ngx-filter-pipe';

const routes: Routes = [
    {
        path: '',
        component: QAPage
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
    declarations: [QAPage]
})
export class QAPageModule {
}
