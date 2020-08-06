import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var FilterArraryPipe = /** @class */ (function () {
    function FilterArraryPipe() {
    }
    FilterArraryPipe.prototype.transform = function (lista, args) {
        lista.filter(function (obj) { return obj.additionalData.ambiente !== args; });
        return lista;
        /* const list: any[] = null;
         if (lista) {
             for (let i = 0; i < lista.length; i++) {
                 if (lista[i][args[0]] === args[1]) {
                     list.push(lista[i]);
                 }
             }
         }
         return list;*/
        /*  console.log('sdsdsdsd')
          return value;*/
    };
    FilterArraryPipe = tslib_1.__decorate([
        Pipe({
            name: 'filterArrary'
        })
    ], FilterArraryPipe);
    return FilterArraryPipe;
}());
export { FilterArraryPipe };
//# sourceMappingURL=filter-arrary.pipe.js.map