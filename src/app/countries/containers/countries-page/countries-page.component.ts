import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CountryListItem } from 'src/app/countries/models/country.model';
import { CountryService } from 'src/app/countries/services/country.service';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesPageComponent implements OnInit {

  countries$!: Observable<CountryListItem[]>;

  constructor(
    private countryService: CountryService
  ) {
    this.countries$ = this.countryService.all().pipe(
      map((countries: CountryListItem[]) => countries.map(country => {
        return {
          ...country,
          title: country.name?.common
        }
      }))
    );
  }

  ngOnInit() {

  }

  trackByFn(index: number) {
    return index;
  }

}
