import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {LogviewPage} from '../modals/system/logview/logview.page';
import {LogviewPageModule} from '../modals/system/logview/logview.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LogviewPageModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ], entryComponents: [LogviewPage],
    declarations: [HomePage]
})
export class HomePageModule {
}
