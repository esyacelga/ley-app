import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterArrary'
})
export class FilterArraryPipe implements PipeTransform {

    transform(value: any[], args?: any): any {
        return value;
    }

}
