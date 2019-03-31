export class RegistroMensajes {
    error_messages = {
        'email': [
            {type: 'required', message: 'Email es requerido'},
            {type: 'minlength', message: 'Debe ser mayor o igual a 6 caracteres'},
            {type: 'maxlength', message: 'Debe ser menor o igual a 30 caracteres'}
        ],
        'clave': [
            {type: 'required', message: 'Password es requerido'},
            {type: 'minlength', message: 'Debe ser mayor o igual a 6 caracteres'},
            {type: 'maxlength', message: 'Debe ser menor o igual a 30 caracteres'}

        ],
        'passwordValidator': [
            {type: 'required', message: 'La validación del password es requrido'},
            {type: 'minlength', message: 'Debe ser mayor o igual a 6 caracteres'},
            {type: 'maxlength', message: 'Debe ser menor o igual a 30 caracteres'}

        ],
        'primerNombre': [
            {type: 'required', message: 'Primer nombre es requerido'},
            {type: 'minlength', message: 'Debe ser mayor o igual a 6 caracteres'},
            {type: 'maxlength', message: 'Debe ser menor o igual a 30 caracteres'}

        ],
        'primerApellido': [
            {type: 'required', message: 'Primer apellido es requerido'},
            {type: 'minlength', message: 'Debe ser mayor o igual a 6 caracteres'},
            {type: 'maxlength', message: 'Debe ser menor o igual a 30 caracteres'}

        ],
    };
}
