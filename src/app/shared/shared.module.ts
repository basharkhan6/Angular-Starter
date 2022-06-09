import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlErrorMessageComponent} from "./components/control-error-message/control-error-message.component";



@NgModule({
  declarations: [
    ControlErrorMessageComponent
  ],
  exports: [
    ControlErrorMessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
