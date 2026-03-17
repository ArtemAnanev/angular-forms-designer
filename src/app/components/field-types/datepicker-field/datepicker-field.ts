import { Component, input } from '@angular/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { IFormField } from '../../../models/field';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-datepicker-field',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
  template: `
    <mat-form-field appearance="outline" class="w-full">
      <mat-label>{{ field().label }}</mat-label>
      <input matInput [matDatepicker]="picker" [required]="field().required" />
      <mat-datepicker-toggle matIconSuffix [for]="picker" />
      <mat-datepicker #picker/>
    </mat-form-field>
  `,
  styles: ``,
})
export class DatepickerField {
  field = input.required<IFormField>();
}
