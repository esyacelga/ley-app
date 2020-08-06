import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';
import { ToastController } from '@ionic/angular';
import { LoadingService } from './loading.service';
import { COLOR_TOAST_ERROR, COLOR_TOAST_PRIMARY, DURATION_TOAST, ERROR_MESSAGE, LOAD_MESSAGE, PROC_GET_XML_GENERICO, PROC_XML_REST_GENERICO, SUCCESS_MESSAGE } from '../../config/config';
import { RequestOptions } from '../../../classes/RequestOptions';
var GenericAsyncService = /** @class */ (function () {
    function GenericAsyncService(utilService, notify, loading) {
        this.utilService = utilService;
        this.notify = notify;
        this.loading = loading;
        this.ejecucionGenerica = function (genericObject, storeProcedure, messages) {
            var _this = this;
            var promesa = new Promise(function (resolve, reject) {
                if (!messages) {
                    messages = new RequestOptions();
                }
                if (messages.restUrl === undefined) {
                    messages.restUrl = PROC_XML_REST_GENERICO;
                }
                if (messages.successMessaje === undefined) {
                    messages.successMessaje = SUCCESS_MESSAGE;
                }
                if (messages.errorMessage === undefined) {
                    messages.errorMessage = ERROR_MESSAGE;
                }
                if (messages.loadingMessage === undefined) {
                    messages.loadingMessage = LOAD_MESSAGE;
                }
                if (messages.toastColor === undefined) {
                    messages.toastColor = COLOR_TOAST_PRIMARY;
                }
                _this.loading.present('messagesService.loadMessagesOverview', messages.loadingMessage);
                _this.utilService.procEjecucionGenerica(genericObject, storeProcedure, messages.restUrl).subscribe(function (resp) {
                    _this.loading.dismiss('messagesService.loadMessagesOverview');
                    _this.presentToast(messages.successMessaje, messages.toastColor);
                    if (resp.RETURN_VALUE !== 1) {
                        _this.presentToast(resp.AS_MSJ, COLOR_TOAST_ERROR);
                        reject(resp.AS_MSJ);
                    }
                    else {
                        var obj = null;
                        if (messages.responseType === 1) {
                            obj = _this.utilService.entidadDesdeXML(resp.AS_XML);
                        }
                        else {
                            obj = _this.utilService.listaDesdeXML(resp.AS_XML);
                        }
                        resolve(obj);
                    }
                }, function (error) {
                    _this.loading.dismiss('messagesService.loadMessagesOverview');
                    _this.presentToast(messages.errorMessage, COLOR_TOAST_ERROR);
                    reject(error);
                });
            });
            return promesa;
        };
    }
    GenericAsyncService.prototype.getGenericObjects = function (genericObject, storeProcedure, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var promesa;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (!options) {
                    options = new RequestOptions();
                }
                promesa = new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (options.restUrl === undefined) {
                                    options.restUrl = PROC_GET_XML_GENERICO;
                                }
                                if (options.successMessaje === undefined) {
                                    options.successMessaje = SUCCESS_MESSAGE;
                                }
                                if (options.errorMessage === undefined) {
                                    options.errorMessage = ERROR_MESSAGE;
                                }
                                if (options.loadingMessage === undefined) {
                                    options.loadingMessage = LOAD_MESSAGE;
                                }
                                if (options.toastColor === undefined) {
                                    options.toastColor = COLOR_TOAST_PRIMARY;
                                }
                                return [4 /*yield*/, this.loading.present('messagesService.loadMessagesOverview', 'Procesando...')];
                            case 1:
                                _a.sent();
                                this.utilService.procConsultaGenerica(genericObject, storeProcedure, options.restUrl).subscribe(function (resp) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                    var obj;
                                    return tslib_1.__generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                this.loading.dismiss('messagesService.loadMessagesOverview');
                                                if (!(resp.RETURN_VALUE !== 1)) return [3 /*break*/, 2];
                                                return [4 /*yield*/, this.presentToast(resp.AS_MSJ, COLOR_TOAST_ERROR)];
                                            case 1:
                                                _a.sent();
                                                reject(resp.AS_MSJ);
                                                return [3 /*break*/, 3];
                                            case 2:
                                                obj = null;
                                                if (options.responseType === 1) {
                                                    obj = this.utilService.entidadDesdeXML(resp.AS_XML);
                                                }
                                                else {
                                                    obj = this.utilService.listaDesdeXML(resp.AS_XML);
                                                }
                                                resolve(obj);
                                                _a.label = 3;
                                            case 3: return [2 /*return*/];
                                        }
                                    });
                                }); }, function (error) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                    return tslib_1.__generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.loading.dismiss('messagesService.loadMessagesOverview')];
                                            case 1:
                                                _a.sent();
                                                this.presentToast(options.errorMessage, COLOR_TOAST_ERROR);
                                                reject(error);
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, promesa];
            });
        });
    };
    GenericAsyncService.prototype.presentToast = function (mensaje, color) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.notify.create({
                            message: mensaje,
                            duration: DURATION_TOAST,
                            color: color
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    GenericAsyncService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [UtilsService, ToastController, LoadingService])
    ], GenericAsyncService);
    return GenericAsyncService;
}());
export { GenericAsyncService };
//# sourceMappingURL=generic-async.service.js.map