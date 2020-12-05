import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count = 0;
  count2 = 0;
  constructor() {
    this.count2 = 'ABC'.length; // 3
    this.count = '😀🏴󠁧󠁢󠁷󠁬󠁳󠁿😇'.length; // 18
  }
}
