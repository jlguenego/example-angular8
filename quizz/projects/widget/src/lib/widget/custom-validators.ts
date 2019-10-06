import { AbstractControl, ValidationErrors } from '@angular/forms';

// for ng-packagr being able to compile lambda function in static methods.
// @dynamic
export class CustomValidators {

  static maxLength(max: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log('control: ', control);
      if (control.value.length > max) {
        return {
          maxLength: `too long! (max: ${max})`
        };
      }
      return null;
    };
  }
}
