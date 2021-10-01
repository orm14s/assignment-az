
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryListItem } from 'src/app/countries/models/country.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  /**
   *
   * https://restcountries.eu/rest/v2/all // need access-key
   *
   * @doc
   * https://restcountries.com/#rest-countries-users
   *
   * Important Information About Version 2 — The structure has been reverted to its original form from the Original Project to maintain compatibility.
   */
  private baseUrl: string = 'https://restcountries.com/v3.1/all';

  constructor(
    private http: HttpClient
  ) { }

  public all(): Observable<CountryListItem[]> {
    return this.http.get<CountryListItem[]>(this.baseUrl, httpOptions);
  }

}

/**
 * Mockup data for test purpose
 */
export const mockCountryList = [
  {
    "name": {
      "common": "Angola",
      "official": "",
      "nativeName": {
        "por": {
          "official": "",
          "common": ""
        }
      }
    }
  },
  {
    "name": {
      "common": "Guyana",
      "official": "",
      "nativeName": {
        "por": {
          "official": "",
          "common": ""
        }
      }
    }
  }
];
