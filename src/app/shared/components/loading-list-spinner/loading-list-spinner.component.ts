import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-list-spinner',
  templateUrl: './loading-list-spinner.component.html',
  styleUrls: ['./loading-list-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingListSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
