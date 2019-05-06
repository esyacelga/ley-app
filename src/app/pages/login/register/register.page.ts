import {Component, OnInit} from '@angular/core';
import {UsuarioApp} from '../../../../classes/UsuarioApp';
import {UsuarioService} from '../../../services/seguridad/usuario.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegistroMensajes} from './RegistroMensajes';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    usuarioApp: UsuarioApp = new UsuarioApp();
    loginForm: FormGroup;
    registoMensajes: RegistroMensajes = new RegistroMensajes();
    error_messages = this.registoMensajes.error_messages;

    constructor(public usuarioService: UsuarioService, public formFuilder: FormBuilder, private router: Router) {
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
        }, {validators: this.isEquals('clave', 'passwordValidator')});
    }

    isEquals(campo: string, campoToValidate: string) {
        return (group: FormGroup) => {
            const pass1 = group.controls[campo].value;
            const pass2 = group.controls[campoToValidate].value;
            if (pass1 === pass2) {
                return null;
            } else {
                return {
                    sonIguales: true
                };
            }
        };
    }




    registerNewUser() {
        const usuarioApp = <UsuarioApp>this.loginForm.value;
        this.usuarioService.registrarUsuario(usuarioApp).then(respuesta => {
            this.router.navigate(['/signin']);
            console.log('');
        });

    }

    ngOnInit() {
    }

}
