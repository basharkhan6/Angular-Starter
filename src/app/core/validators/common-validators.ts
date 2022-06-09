import {Injectable} from "@angular/core";
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CommonValidators {

  static emailValidator(control: FormControl): ValidationErrors | null {
    // RFC 2822 compliant regex
    const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return control.value.match(emailRegEx) ? null : {'email': true};
  }

  public static onlyAlphanumerics(control: FormControl): ValidationErrors | null {
    // RFC 2822 compliant regex
    return RegExp('^[a-zA-Z0-9]*$').test(control.value) ? null : {'onlyAlphanumerics': true};
  }

  public static matchPassword(field1: string = 'password', field2: string = 'confirmPassword'): ValidatorFn {
    return (formGroup: AbstractControl) => {
      let control1 = formGroup.get(field1);
      let control2 = formGroup.get(field2);
      if (!control1?.value)
        return null;
      if (!control2?.value)
        return null;

      if (control1.value === control2.value) {
        control1.setErrors({notEquivalent: true});
        control2.setErrors({notEquivalent: true});
      }
      return;
    };
  }

  public static minLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == null || control.value == '') {
        return null;
      }

      let value = control.value;
      if (value.toString().length < minLength) {
        return {
          'minlength': {
            'actualLength': value.toString().length,
            'requiredLength': minLength
          }
        };
      }
      return null;
    };
  }

  public static maxLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == null || control.value == '') {
        return null;
      }

      let value = control.value;
      if (value.toString().length > maxLength) {
        return {
          'maxlength': {
            'actualLength': value.toString().length,
            'requiredLength': maxLength
          }
        };
      }
      return null;
    };
  }

}
