import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LogPage } from './log.page';
var routes = [
    {
        path: '',
        component: LogPage
    }
];
var LogPageModule = /** @class */ (function () {
    function LogPageModule() {
    }
    LogPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [LogPage]
        })
    ], LogPageModule);
    return LogPageModule;
}());
export { LogPageModule };
//# sourceMappingURL=log.module.js.map