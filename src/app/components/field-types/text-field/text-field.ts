import {Component, input} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {IFormField} from "../../../models/field";

@Component({
  selector: 'app-text-field',
  imports: [MatFormFieldModule, MatInputModule],
  template: `
    <mat-form-field class="w-full">
      <input 
          matInput
          [type]="field().inputType || 'text'" 
          [required]="field().required" 
      />
    </mat-form-field>
  `,
  standalone: true,
  styles: ``
})
export class TextField {
  field = input.required<IFormField>();
}
