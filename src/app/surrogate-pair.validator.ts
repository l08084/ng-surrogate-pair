import { length } from 'stringz';

import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable()
export class SurrogatePairValidator {

  /**
   * サロゲートペア文字（絵文字など）も含む最小文字数
   *
   * @static
   * @param {number} minLength
   * @returns {ValidatorFn}
   * @memberof SurrogatePairValidator
   */
  public static minLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value = (control.value || '') + '';
      if (value === '') {
        return null;
      }
      return length(value) >= minLength
        ? null
        : { minlength: { requiredLength: minLength } };
    };
  }

  /**
   * サロゲートペア文字（絵文字など）も含む最大文字数
   *
   * @static
   * @param {number} maxLength
   * @return {*}  {ValidatorFn}
   * @memberof StringValidator
   */
  public static maxLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const value = (control.value || '') + '';
      if (value === '') {
        return null;
      }
      return length(value) <= maxLength
        ? null
        : { maxlength: { requiredLength: maxLength } };
    };
  }
}
