import {Injectable} from "@angular/core";
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {ValidatorService} from "./validator.service";

@Injectable({
  providedIn: 'root'
})
export class CommonValidators {

  static email(control: FormControl): ValidationErrors | null {
    const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return control.value.match(emailRegEx) ? null : {email: true} ;
  }

  public static onlyAlphanumerics(control: FormControl): ValidationErrors | null {
    return RegExp('^[a-zA-Z0-9]*$').test(control.value) ? null : {onlyAlphanumerics: true};
  }

  /**
   * @param field1 password fieldName
   * @param field2 confirmPassword fieldName
   *
   * \** Must use with FormGroup
   */
  public static matchPassword(field1: string = 'password', field2: string = 'confirmPassword'): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      let control1 = group.get(field1);
      let control2 = group.get(field2);
      if (!control1?.value)
        return null;
      if (!control2?.value)
        return null;

      if (control1.value !== control2.value) {
        control1.setErrors({passwordMismatch: true});
        control2.setErrors({passwordMismatch: true});
      } else {
        ValidatorService.removeError(control1, 'passwordMismatch');
        ValidatorService.removeError(control2, 'passwordMismatch');
      }
      return null;
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
          minlength: {
            actualLength: value.toString().length,
            requiredLength: minLength
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
          maxlength: {
            actualLength: value.toString().length,
            requiredLength: maxLength
          }
        };
      }
      return null;
    };
  }

}
