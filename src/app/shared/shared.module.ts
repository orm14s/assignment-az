import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingListSpinnerComponent } from './components/loading-list-spinner/loading-list-spinner.component';
import { MaterialModule } from './meterial/material.module';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    LoadingListSpinnerComponent,

    // Pipes
    SortPipe,
    FilterPipe
  ],
  exports: [

    // Modules
    MaterialModule,

    // Components
    LoadingListSpinnerComponent,

    // Pipes
    SortPipe,
    FilterPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})


export class SharedModule { }
