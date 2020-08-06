import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
var UbicacionProviderService = /** @class */ (function () {
    function UbicacionProviderService(geolocation) {
        this.geolocation = geolocation;
    }
    UbicacionProviderService.prototype.iniciarGeolocalicacion = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            console.log(resp.coords);
            var watch = _this.geolocation.watchPosition();
            watch.subscribe(function (data) {
                // data can be a set of coordinates, or an error (if an error occurred).
                // data.coords.latitude
                // data.coords.longitude
                console.log('Watch: ', data);
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    UbicacionProviderService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Geolocation])
    ], UbicacionProviderService);
    return UbicacionProviderService;
}());
export { UbicacionProviderService };
//# sourceMappingURL=ubicacion-provider.service.js.map