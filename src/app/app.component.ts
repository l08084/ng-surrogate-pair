import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count = 0;
  count2 = 0;
  count3 = 0;
  constructor() {
    // 例1. 通常の文字
    this.count2 = 'A'.length; // 1
    // 例2. 通常の絵文字
    this.count = '😀'.length; // 2
    // 例3. 特殊な絵文字
    this.count3 = '🏴󠁧󠁢󠁷󠁬󠁳󠁿'.length; // 14
  }
}
