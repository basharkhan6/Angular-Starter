import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from "@angular/forms";
import {ValidatorService} from "../../../core/validators/validator.service";

@Component({
  selector: 'control-error-message',
  templateUrl: './control-error-message.component.html',
  styleUrls: ['./control-error-message.component.css']
})
export class ControlErrorMessageComponent implements OnInit {

  @Input()
  public control: AbstractControl | null = null;

  @Input()
  public submitted?: boolean = false;

  constructor(private validatorService: ValidatorService) {
  }

  ngOnInit(): void {
  }

  get errorMessage(): string | null {
    if (!this.control) {
      return null;
    }

    for (let propertyName in this.control.errors) {
      console.log('Checking for control', this.control);
      if (this.control.errors.hasOwnProperty(propertyName) && (this.control.touched || this.control.dirty || this.submitted)) {
        return this.validatorService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }

}
