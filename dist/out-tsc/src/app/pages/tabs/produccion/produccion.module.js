import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProduccionPage } from './produccion.page';
import { PipesModule } from '../../../pipes/pipes.module';
import { FilterPipeModule } from 'ngx-filter-pipe';
var routes = [
    {
        path: '',
        component: ProduccionPage
    }
];
var ProduccionPageModule = /** @class */ (function () {
    function ProduccionPageModule() {
    }
    ProduccionPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                FilterPipeModule,
                PipesModule,
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProduccionPage]
        })
    ], ProduccionPageModule);
    return ProduccionPageModule;
}());
export { ProduccionPageModule };
//# sourceMappingURL=produccion.module.js.map