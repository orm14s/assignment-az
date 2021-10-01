export class CountryListItem {
  name?: CountryName;
  tld?: string[];
  cca2?: string;
  ccn3?: string;
  cca3?: string;
  cioc?: string;
  independent?: boolean;
  status?: string;
  unMember?: boolean;
  currencies?: CountryCurrency;
  idd?: CountryIdd;
  capital?: string[];
  altSpellings?: string[];
  region?: string;
  subregion?: string;
  languages?: CountryLanguage;
  translations?: CountryTranslation;
  latlng?: number[];
  landlocked?: boolean;
  borders?: string[];
  area?: number;
  demonyms?: CountryDemonyms;
  flag?: string;
  maps?: CountryMap;
  population?: number;
  flags?: CountryFlag;
  title?: string;
}

export interface CountryName {
  common: string;
  official: string;
  nativeName: CountryNativeName;
}

export interface CountryNativeName {
  [x: string]: {
    official: string;
    common: string;
  }
}

export interface CountryCurrency {
  [x: string]: {
    name: string;
    symbol: string;
  }
}

export interface CountryIdd {
  root: string;
  suffixes: string[];
}

export interface CountryLanguage {
  [x: string]: string;
}

export interface CountryTranslation {
  [x: string]: {
    official: string;
    common: string;
  }
}

export interface CountryDemonyms {
  [x: string]: {
    f: string;
    m: string;
  },
}

export interface CountryMap {
  googleMaps: string;
  openStreetMaps: string;
}

export interface CountryFlag {
  [x: string]: string;
}
