/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { CountriesPageComponent } from './countries-page.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { CountryService, mockCountryList } from 'src/app/countries/services/country.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CountriesPageComponent', () => {
  let component: CountriesPageComponent;
  let fixture: ComponentFixture<CountriesPageComponent>;
  let countryServiceSpy: jasmine.SpyObj<CountryService>;

  beforeEach(() => {

    countryServiceSpy = jasmine.createSpyObj('CountryService', ['all']);
    countryServiceSpy.all.and.returnValue(of(mockCountryList));

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule
      ],
      declarations: [
        CountriesPageComponent
      ],
      providers: [
        { provide: CountryService, useValue: countryServiceSpy }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render app-countries-item after get country list', (() => {
    const countryItemElement = fixture.nativeElement.querySelectorAll('app-countries-item');
    expect(countryItemElement.length).toEqual(2)
  }));

  it('should not render app-countries-item if a filter not match to any items', async(() => {
    fixture.whenStable().then(() => {
      let input = fixture.debugElement.query(By.css('input'));
      let el = input.nativeElement;

      el.value = 'EMPTY_COUNTRY';
      el.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      const countryItemElement = fixture.nativeElement.querySelectorAll('app-countries-item');
      expect(countryItemElement.length).toEqual(0);
    });
  }));

  it('should render 1 app-countries-item if a filter match to full text search with "Angola"', async(() => {
    fixture.whenStable().then(() => {
      let input = fixture.debugElement.query(By.css('input'));
      let el = input.nativeElement;

      el.value = 'Angola';
      el.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      const countryItemElement = fixture.nativeElement.querySelectorAll('app-countries-item');
      expect(countryItemElement.length).toEqual(1);
    });
  }));

  it('should render 2 app-countries-item if a filter match to partial text search with "a"', async(() => {
    fixture.whenStable().then(() => {
      let input = fixture.debugElement.query(By.css('input'));
      let el = input.nativeElement;

      el.value = 'a';
      el.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      const countryItemElement = fixture.nativeElement.querySelectorAll('app-countries-item');
      expect(countryItemElement.length).toEqual(2);
    });
  }));

});
