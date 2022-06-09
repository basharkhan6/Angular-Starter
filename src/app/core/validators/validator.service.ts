import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public getValidatorErrorMessage(validatorName: string, validatorValue?: any): string {
    let config = {
      'required': 'Required!',
      'email': 'Invalid email address',
      'phoneNumberError': 'Invalid Phone Number',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      'passwordMismatch': 'Password does not match!',
      'minlength': `Minimum length ${validatorValue.requiredLength}`,
      'min': `Value Must Be Greater Than: ${validatorValue.min}`,
      'maxlength': `Maximum length ${validatorValue.requiredLength}`,
      'max': `Value Must Be Lower Than:  ${validatorValue.max}`,
      'onlyAlphanumerics': 'Invalid value. Only alphabets can be inserted in this field',
    };
    // @ts-ignore
    return config[validatorName];
  }

}
