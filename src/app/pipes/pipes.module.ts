import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterArraryPipe} from './filter-arrary.pipe';

@NgModule({
    declarations: [FilterArraryPipe],
    imports: [
        CommonModule
    ],
    exports: [FilterArraryPipe]
})
export class PipesModule {
}
