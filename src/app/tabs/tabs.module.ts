import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs.router.module';

import {TabsPage} from './tabs.page';
import {LogviewPage} from '../modals/system/logview/logview.page';
import {LogviewPageModule} from '../modals/system/logview/logview.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        LogviewPageModule,
        FormsModule,
        TabsPageRoutingModule
    ], entryComponents: [LogviewPage],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
