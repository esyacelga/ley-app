import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterArraryPipe } from './filter-arrary.pipe';
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib_1.__decorate([
        NgModule({
            declarations: [FilterArraryPipe],
            imports: [
                CommonModule
            ],
            exports: [FilterArraryPipe]
        })
    ], PipesModule);
    return PipesModule;
}());
export { PipesModule };
//# sourceMappingURL=pipes.module.js.map