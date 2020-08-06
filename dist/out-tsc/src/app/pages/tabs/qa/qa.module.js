import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { QAPage } from './qa.page';
import { FilterPipeModule } from 'ngx-filter-pipe';
var routes = [
    {
        path: '',
        component: QAPage
    }
];
var QAPageModule = /** @class */ (function () {
    function QAPageModule() {
    }
    QAPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FilterPipeModule,
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [QAPage]
        })
    ], QAPageModule);
    return QAPageModule;
}());
export { QAPageModule };
//# sourceMappingURL=qa.module.js.map