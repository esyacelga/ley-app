import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PasswordPage } from './password.page';
var routes = [
    {
        path: '',
        component: PasswordPage
    }
];
var PasswordPageModule = /** @class */ (function () {
    function PasswordPageModule() {
    }
    PasswordPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PasswordPage]
        })
    ], PasswordPageModule);
    return PasswordPageModule;
}());
export { PasswordPageModule };
//# sourceMappingURL=password.module.js.map