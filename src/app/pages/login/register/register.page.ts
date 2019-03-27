import {Component, OnInit} from '@angular/core';
import {UsuarioAppp} from '../../../../classes/UsuarioApp';
import {UtilsService} from '../../../services/commons/utils.service';
import {URL_SERVICIOS} from '../../../config/config';
import {UploadFile} from '../../../../classes/UploadFile';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    usuarioApp: UsuarioAppp = new UsuarioAppp();

    constructor(private xmlParse: UtilsService, private  http: HttpClient) {
    }

    registerNewUser(usuario: UsuarioAppp) {
        const data = this.xmlParse.toXML(usuario);
        const uploadFila = new UploadFile();
        uploadFila.valorXml = data;
        uploadFila.storeProcedure = 'kka';
        console.log(data);
        const dara = new HttpHeaders();
        dara.set('Content-Type', 'application/json');
        const url = URL_SERVICIOS + '/procCommonXMLService';
        this.http.get('http://localhost:8080/siisspol-web/userdetails/?id=q').subscribe(resp => {
            console.log(resp);
        }, error1 => {
            console.log(error1);
        });

        /*  this.http.jsonp('http://localhost:8080/siisspol-web/userdetails/?id=q',).subscribe(resp => {
              console.log(resp);
          }, error1 => {
              console.log(error1);
          });
  */

    }

    ngOnInit() {

    }

}
