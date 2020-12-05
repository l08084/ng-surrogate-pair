import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SurrogatePairMaxLengthDirective } from './surrogate-pair-max-length.directive';
import { SurrogatePairMinLengthDirective } from './surrogate-pair-min-length.directive';

@NgModule({
  declarations: [
    AppComponent,
    SurrogatePairMaxLengthDirective,
    SurrogatePairMinLengthDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
