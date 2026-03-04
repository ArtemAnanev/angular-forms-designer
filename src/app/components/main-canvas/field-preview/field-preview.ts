import { Component, computed, inject, input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { FieldTypesService } from '../../../services/field-types.service';
import { IFormField } from '../../../models/field';

@Component({
  selector: 'app-field-preview',
  imports: [NgComponentOutlet],
  template: `
    <ng-container [ngComponentOutlet]="previewComponent()"
                  [ngComponentOutletInputs]="{ field: field() }"
    >
    </ng-container> 
  `,
  styles: ``,
  standalone: true,
})
export class FieldPreview {
  field = input.required<IFormField>();

  fieldTypesService = inject(FieldTypesService);

  previewComponent = computed(() => {
    const type = this.fieldTypesService.getFieldType(this.field().type)
    return type?.component ?? null;
  })
}
