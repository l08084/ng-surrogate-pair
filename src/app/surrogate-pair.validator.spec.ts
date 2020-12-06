import { Component, OnInit } from '@angular/core';
/**
 * This is unit test code for SurrogatePairValidator using karma.
 */
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { SurrogatePairValidator } from './surrogate-pair.validator';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

/**
 * Component that creates input field for test
 *
 * @export
 * @class RegisterComponent
 */
@Component({
  selector: 'app-register',
  template: `
    <form [formGroup]="form">
      <label>minLength</label>
      <input formControlName="minLength" />
      <label>maxLength</label>
      <input formControlName="maxLength" />
    </form>
  `
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {}
  /**
   * initialize form
   *
   * @memberof RegisterComponent
   */
  public ngOnInit(): void {
    this.form = this.fb.group({
      minLength: [null, SurrogatePairValidator.minLength(5)],
      maxLength: [null, SurrogatePairValidator.maxLength(5)]
    });
  }
}

/**
 * Check if the method checks invalid_inputs and valid_inputs correctly
 *
 * @param {string} field_name
 * @param {RegisterComponent} component
 * @param {string[]} valid_inputs
 * @param {string[]} invalid_inputs
 */
function assertValues(
  field_name: string,
  component: RegisterComponent,
  valid_inputs: string[],
  invalid_inputs: string[]
): void {
  const control = component.form.controls[field_name];
  for (const invalid of invalid_inputs) {
    control.setValue(invalid);
    expect(control.valid).toBeFalsy();
  }
  for (const valid of valid_inputs) {
    control.setValue(valid);
    expect(control.valid).toBeTruthy();
  }
}

describe('SurrogatePairValidator', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        RegisterComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('minLength', () => {
    const valid_inputs = ['12🐍4🏴󠁧󠁢󠁷󠁬󠁳󠁿', '１吉😀家😀🏴󠁧󠁢󠁷󠁬󠁳󠁿😱', '', null];
    const invalid_inputs = ['😀😀😀😀', '😀😀 😀', 'abce', '1234'];
    assertValues(
      'minLength',
      component,
      valid_inputs,
      invalid_inputs
    );
  });

  it('maxLength', () => {
    const valid_inputs = ['12🐍45', '１吉🏴󠁧󠁢󠁷󠁬󠁳󠁿😀', '', null];
    const invalid_inputs = ['😀😀😀😀😀😀', '😀😀 😀😀😀', 'abcedf', '123456'];
    assertValues(
      'maxLength',
      component,
      valid_inputs,
      invalid_inputs
    );
  });
});
