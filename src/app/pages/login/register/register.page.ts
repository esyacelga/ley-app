import {Component, OnInit} from '@angular/core';
import {UsuarioAppp} from '../../../../classes/UsuarioApp';
import {UsuarioService} from '../../../services/seguridad/usuario.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    usuarioApp: UsuarioAppp = new UsuarioAppp();
    loginForm: FormGroup;
    error_messages = {
        'email': [
            {type: 'required', message: 'Email es requerido'},
            {type: 'minlength', message: 'Debe ser mayor o igual a 6 caracteres'},
            {type: 'maxlength', message: 'Debe ser menor o igual a 30 caracteres'}

        ],
        'password': [
            {type: 'required', message: 'Email es requerido'},
            {type: 'minlength', message: 'Debe ser mayor o igual a 6 caracteres'},
            {type: 'maxlength', message: 'Debe ser menor o igual a 30 caracteres'}

        ],
    };

    constructor(public usuarioService: UsuarioService, public formFuilder: FormBuilder) {
        this.loginForm = this.formFuilder.group({
            password: new FormControl('', Validators.compose([
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
        }, {validators: this.isEquals('password', 'passwordValidator')});
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
        console.log(this.loginForm.value);
        //this.usuarioService.registrarUsuario(usuario);

    }

    ngOnInit() {
    }

}
