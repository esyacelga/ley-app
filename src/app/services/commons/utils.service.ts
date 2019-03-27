import {Injectable} from '@angular/core';
import {Builder, parseString} from 'xml2js';
import {UploadFile} from '../../../classes/UploadFile';
import {URL_SERVICIOS} from '../../config/config';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor(private  http: HttpClient) {
    }

    public toJson = function (xml: string) {
        parseString(xml, {explicitArray: false}, function (error, result) {
            console.log(result);
        });
    };

    // Convert string/JSON to XML
    private toXML = function (json: any) {
        const builder = new Builder();
        return builder.buildObject(json);
    };


    public proGetXMLService = function (genericObject: any, nombreSP: string) {
        const data = this.xmlParse.toXML(genericObject);
        this.http.get('http://localhost:8080/siisspol-web/userdetails/?id=q').subscribe(resp => {
            console.log(resp);
        }, error1 => {
            console.log(error1);
        });
    };

    public proPostXMLServiceRegister = function (genericObject: any, nombreSP: string) {
        const data = this.xmlParse.toXML(genericObject);
        this.http.get('http://localhost:8080/siisspol-web/userdetails/?id=q').subscribe(resp => {
            console.log(resp);
        }, error1 => {
            console.log(error1);
        });
    };

    public procEjecucionGenercia = function (genericObject: any, nombreSP: string) {
        const data = this.toXML(genericObject);
        const obj = new UploadFile();
        obj.valorXml = data;
        obj.storeProcedure = nombreSP;
        const url = URL_SERVICIOS + '/proPostXMLServiceRegister';
        return this.http.post(url, obj);
    };


}
