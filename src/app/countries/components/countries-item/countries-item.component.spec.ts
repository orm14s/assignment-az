/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CountryListItem } from 'src/app/countries/models/country.model';
import { CountriesItemComponent } from './countries-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CountriesItemComponent', () => {
  let component: CountriesItemComponent;
  let fixture: ComponentFixture<CountriesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [CountriesItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesItemComponent);
    component = fixture.componentInstance;
    component.item = new CountryListItem();
    fixture.detectChanges();
  });

  it('should render title when @Input was pass in', async(() => {
    let titleElement = fixture.nativeElement.querySelector('.title');
    expect(titleElement).toBeTruthy();
  }));

});
