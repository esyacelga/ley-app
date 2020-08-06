import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsuarioApp } from '../../../../classes/UsuarioApp';
import { UsuarioService } from '../../../services/seguridad/usuario.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RegistroMensajes } from './RegistroMensajes';
import { Router } from '@angular/router';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(usuarioService, formFuilder, router) {
        this.usuarioService = usuarioService;
        this.formFuilder = formFuilder;
        this.router = router;
        this.usuarioApp = new UsuarioApp();
        this.registoMensajes = new RegistroMensajes();
        this.error_messages = this.registoMensajes.error_messages;
        this.loginForm = this.formFuilder.group({
            primerNombre: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(100)
            ])),
            segundoNombre: new FormControl('', null),
            primerApellido: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(100)
            ])),
            segundoApellido: new FormControl('', null),
            clave: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(30)
            ])),
            passwordValidator: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(30)
            ])),
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(30)
            ]))
        }, { validators: this.isEquals('clave', 'passwordValidator') });
    }
    RegisterPage.prototype.isEquals = function (campo, campoToValidate) {
        return function (group) {
            var pass1 = group.controls[campo].value;
            var pass2 = group.controls[campoToValidate].value;
            if (pass1 === pass2) {
                return null;
            }
            else {
                return {
                    sonIguales: true
                };
            }
        };
    };
    RegisterPage.prototype.registerNewUser = function () {
        var _this = this;
        var usuarioApp = this.loginForm.value;
        this.usuarioService.registrarUsuario(usuarioApp).then(function (respuesta) {
            _this.router.navigate(['/signin']);
            console.log('');
        });
    };
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioService, FormBuilder, Router])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map