import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CountriesPageComponent } from './containers/countries-page/countries-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesItemComponent } from './components/countries-item/countries-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    CountriesRoutingModule
  ],
  declarations: [
    CountriesPageComponent,
    CountriesItemComponent
  ],
  providers: [
    DecimalPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CountriesModule { }
