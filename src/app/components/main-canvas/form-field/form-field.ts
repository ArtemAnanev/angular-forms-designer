import { Component, inject, input } from '@angular/core';
import { IFormField } from '../../../models/field';
import { TitleCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormService } from '../../../services/form.service';
import { FieldPreview } from '../field-preview/field-preview';

@Component({
  selector: 'app-form-field',
  imports: [TitleCasePipe, MatButtonModule, MatIconModule, FieldPreview],
  template: `
    <div
      class="bg-white p-4 pt-1 rounded-lg shadow-sm border border-gray-200 hover:border-black cursor-pointer"
      [class]="formService.selectedField()?.id === field().id ? '!border-black' : ''"
      (click)="formService.setSelectedFieldId(field().id)"
    >
      <div class="flex items-center justify-between mb-1">
        <span class="text-sm">{{ field().type | titlecase }}</span>
        <button mat-icon-button (click)="deleteField($event)">
          <mat-icon class="-mr-2">delete</mat-icon>
        </button>
      </div>
      <app-field-preview [field]="field()" />
    </div>
  `,
  standalone: true,
})
export class FormField {
  field = input.required<IFormField>();

  formService = inject(FormService);

  deleteField(e: Event) {
    e.stopPropagation();
    this.formService.deleteField(this.field().id);
  }
}
