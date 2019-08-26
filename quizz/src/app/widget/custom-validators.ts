import { AbstractControl, ValidationErrors } from '@angular/forms';

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
