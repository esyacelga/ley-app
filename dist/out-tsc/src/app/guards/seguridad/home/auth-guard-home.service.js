import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { UsuarioService } from '../../../services/seguridad/usuario.service';
var AuthGuardHomeService = /** @class */ (function () {
    function AuthGuardHomeService(auth) {
        this.auth = auth;
    }
    AuthGuardHomeService.prototype.canActivate = function (route, state) {
        if (this.auth.isAuthenticated()) {
            console.log('A cambiado de tab');
            this.auth.actualizarPlayerId();
            return true;
        }
        else {
            return false;
        }
    };
    AuthGuardHomeService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioService])
    ], AuthGuardHomeService);
    return AuthGuardHomeService;
}());
export { AuthGuardHomeService };
//# sourceMappingURL=auth-guard-home.service.js.map