import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterArrary'
})
export class FilterArraryPipe implements PipeTransform {

    transform(lista: any[], args?: any): any {
        lista.filter(obj => obj.additionalData.ambiente !== args);
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
    }

}
