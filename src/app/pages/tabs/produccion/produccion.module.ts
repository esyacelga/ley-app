import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ProduccionPage} from './produccion.page';
import {PipesModule} from '../../../pipes/pipes.module';

const routes: Routes = [
    {
        path: '',
        component: ProduccionPage
    }
];

@NgModule({
    imports: [
        PipesModule,
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ProduccionPage]
})
export class ProduccionPageModule {
}
