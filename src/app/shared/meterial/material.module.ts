import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    MatInputModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {
  // FontAwesome icons are visible here https://fontawesome.com
  // Material icons are visible here https://material.io/tools/icons/?style=baseline
}
