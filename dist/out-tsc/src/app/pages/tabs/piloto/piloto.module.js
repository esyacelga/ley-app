import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PilotoPage } from './piloto.page';
import { FilterPipeModule } from 'ngx-filter-pipe';
var routes = [
    {
        path: '',
        component: PilotoPage
    }
];
var PilotoPageModule = /** @class */ (function () {
    function PilotoPageModule() {
    }
    PilotoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FilterPipeModule,
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PilotoPage]
        })
    ], PilotoPageModule);
    return PilotoPageModule;
}());
export { PilotoPageModule };
//# sourceMappingURL=piloto.module.js.map