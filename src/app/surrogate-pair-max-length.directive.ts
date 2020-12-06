import { length, substring } from 'stringz';

import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

/**
 * Surrogate pair max length directive.
 *
 * @export
 * @class SurrogatePairMaxLengthDirective
 */
@Directive({
  selector: '[appSurrogatePairMaxLength]'
})
export class SurrogatePairMaxLengthDirective {
  @Input() public appSurrogatePairMaxLength: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  /**
   * Handles input event.
   *
   * @param {*} event
   * @memberof SurrogatePairMaxLengthDirective
   */
  @HostListener('input', ['$event'])
  public onChange(event: any): void {
    if (length(event.target.value) > this.appSurrogatePairMaxLength) {
      this.renderer.setProperty(
        this.el.nativeElement,
        'value',
        substring(event.target.value, 0, this.appSurrogatePairMaxLength)
      );
    }
  }
}
