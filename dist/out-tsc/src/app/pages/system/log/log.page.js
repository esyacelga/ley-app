import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var LogPage = /** @class */ (function () {
    function LogPage(activR) {
        this.activR = activR;
        this.mensaje = null;
    }
    LogPage.prototype.ngOnInit = function () {
        this.mensaje = this.activR.snapshot.paramMap.get('mensaje');
    };
    LogPage = tslib_1.__decorate([
        Component({
            selector: 'app-log',
            templateUrl: './log.page.html',
            styleUrls: ['./log.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
    ], LogPage);
    return LogPage;
}());
export { LogPage };
//# sourceMappingURL=log.page.js.map