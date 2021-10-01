import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CountryListItem } from 'src/app/countries/models/country.model';

@Component({
  selector: 'app-countries-item',
  templateUrl: './countries-item.component.html',
  styleUrls: ['./countries-item.component.scss'],
  animations: [
    trigger('inOut', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms',
          style({ opacity: 1 })
        )
      ]),
      transition('* => void', [
        animate('500ms',
          style({ opacity: 0 })
        )
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesItemComponent implements OnInit {

  @Input() item!: CountryListItem;

  constructor() { }

  ngOnInit() {

  }

}
