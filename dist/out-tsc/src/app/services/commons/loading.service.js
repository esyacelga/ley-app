import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
var LoadingService = /** @class */ (function () {
    function LoadingService(loadingController) {
        this.loadingController = loadingController;
    }
    LoadingService.prototype.present = function (loadingId, loadingMessage) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            id: loadingId,
                            message: loadingMessage
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadingService.prototype.dismiss = function (loadingId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.dismiss(null, null, loadingId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoadingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [LoadingController])
    ], LoadingService);
    return LoadingService;
}());
export { LoadingService };
//# sourceMappingURL=loading.service.js.map