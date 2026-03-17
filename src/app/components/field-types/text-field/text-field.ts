import {Component, input} from '@angular/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {IFormField} from "../../../models/field";

@Component({
  selector: 'app-text-field',
  imports: [MatFormFieldModule, MatInputModule, MatLabel],
  template: `
    <mat-form-field appearance="outline" class="w-full">
      <mat-label>{{field().label}}</mat-label>
      <input 
          matInput
          [type]="field().inputType || 'text'" 
          [required]="field().required" 
          [placeholder]="field().placeholder || ''"
      />
    </mat-form-field>
  `,
  standalone: true,
})
export class TextField {
  field = input.required<IFormField>();
}
