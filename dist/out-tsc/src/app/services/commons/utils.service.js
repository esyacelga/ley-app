import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Builder } from 'xml2js';
import { UploadFile } from '../../../classes/UploadFile';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
var UtilsService = /** @class */ (function () {
    function UtilsService(http) {
        this.http = http;
        /**
         * Caracter a booleano
         * @param caracter
         */
        this.toBoolean = function (caracter) {
            if (!caracter) {
                return false;
            }
            var dato = caracter;
            if (dato === '1' || dato === 1 || caracter === 'true') {
                return true;
            }
            else {
                return false;
            }
        };
        this.modificarValoresBooleanos = function (lista, campo) {
            if (lista) {
                if (lista) {
                    for (var i = 0; i < lista.length; i++) {
                        var valores = lista[i];
                        for (var aux in valores) {
                            if (aux === campo) {
                                lista[i][aux] = this.toBoolean(lista[i][aux]);
                            }
                        }
                    }
                }
            }
            return lista;
        };
        this.parseXml = function (data) {
            var parser, xmlDoc;
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(data, 'text/xml');
            return xmlDoc;
        };
        /**
         * Convierte el resultado de un xml en un objeto json
         * @param data
         */
        this.entidadDesdeXML = function (data) {
            if (!data || data == null) {
                return null;
            }
            var parseXml = this.parseXml(data);
            var obj = this.xmlToJson(parseXml);
            if (!obj && !obj.root && !obj.root.entidad && !obj.root.entidad.row) {
                return null;
            }
            return obj.root.entidad.row;
        };
        this.formatearListaXml = function (lst) {
            var lista = [];
            if (lst == null) {
                return null;
            }
            for (var _i = 0, lst_1 = lst; _i < lst_1.length; _i++) {
                var entry = lst_1[_i];
                lista.push(entry.row);
            }
            return lista;
        };
        /**
         *
         * @param data
         */
        this.listaDesdeXML = function (data) {
            var parseXml = this.parseXml(data);
            var obj = this.xmlToJsonFormat(parseXml);
            if (!obj) {
                return null;
            }
            return this.formatearListaXml(obj.root.entidad);
        };
        this.xmlToJsonFormat = function (xml) {
            var data = this.xmlToJson(xml);
            if (!data.root) {
                return null;
            }
            if (data.root.entidad.length) {
                return data;
            }
            else {
                var dato = data.root.entidad;
                data.root.entidad = [];
                data.root.entidad.push(dato);
                return data;
            }
        };
        this.xmlToJson = function (xml) {
            // Create the return object
            var obj = {};
            if (xml.nodeType === 1) { // element
                // do attributes
                if (xml.attributes.length > 0) {
                    obj['row'] = {};
                    for (var j = 0; j < xml.attributes.length; j++) {
                        var attribute = xml.attributes.item(j);
                        obj['row'][attribute.nodeName.replace('_x0020_', ' ')] = attribute.nodeValue;
                    }
                }
            }
            else if (xml.nodeType === 3) { // text
                obj = xml.nodeValue;
            }
            // do children
            if (xml.hasChildNodes()) {
                for (var i = 0; i < xml.childNodes.length; i++) {
                    var item = xml.childNodes.item(i);
                    var nodeName = item.nodeName;
                    if (typeof (obj[nodeName]) === 'undefined') {
                        obj[nodeName] = this.xmlToJson(item);
                    }
                    else {
                        if (typeof (obj[nodeName].push) === 'undefined') {
                            var old = obj[nodeName];
                            obj[nodeName] = [];
                            obj[nodeName].push(old);
                        }
                        obj[nodeName].push(this.xmlToJson(item));
                    }
                }
            }
            return obj;
        };
        // Convert string/JSON to XML
        this.toXML = function (json) {
            var builder = new Builder();
            return builder.buildObject(json);
        };
        this.proGetXMLService = function (genericObject, nombreSP) {
            var data = this.xmlParse.toXML(genericObject);
            this.http.get('http://localhost:8080/siisspol-web/userdetails/?id=q').subscribe(function (resp) {
                console.log(resp);
            }, function (error1) {
                console.log(error1);
            });
        };
        this.proPostXMLServiceRegister = function (genericObject, nombreSP) {
            var data = this.xmlParse.toXML(genericObject);
            var url = URL_SERVICIOS + '/proGetXMLService';
            this.http.get(url + '/?parametroXML=q').subscribe(function (resp) {
                console.log(resp);
            }, function (error1) {
                console.log(error1);
            });
        };
        this.procConsultaGenerica = function (genericObject, nombreSP, urlRestService) {
            var data = this.toXML(genericObject);
            var obj = new UploadFile();
            obj.valorXml = data;
            obj.storeProcedure = nombreSP;
            var url = URL_SERVICIOS + '/' + urlRestService;
            return this.http.put(url, obj);
        };
        this.procEjecucionGenerica = function (genericObject, nombreSP, urlRestService) {
            var data = this.toXML(genericObject);
            var obj = new UploadFile();
            obj.valorXml = data;
            console.log('xml generado: ' + data);
            obj.storeProcedure = nombreSP;
            var url = URL_SERVICIOS + '/' + urlRestService;
            return this.http.post(url, obj);
        };
    }
    UtilsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UtilsService);
    return UtilsService;
}());
export { UtilsService };
//# sourceMappingURL=utils.service.js.map