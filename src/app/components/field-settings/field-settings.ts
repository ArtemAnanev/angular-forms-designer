import { Component, computed, inject } from '@angular/core';
import { FormService } from '../../services/form.service';
import { FieldTypesService } from '../../services/field-types.service';

@Component({
  selector: 'app-field-settings',
  imports: [],
  template: `
    <p class="p-4 bg-white rounded-lg h-[calc(100vh-150px)] overflow-y-auto border-gray-200 shadow-sm">
      @if (formService.selectedField(); as selectedField) {
        <h3 class="text-xl font-medium mb-6">Field Properties</h3>
        <div class="flex flex-col gap-6">
          @for (setting of fieldSettings();track setting.key) {}
        </div>
      }
    </p>
  `,
  standalone: true,
})
export class FieldSettings {
  formService = inject(FormService);
  fieldTypesService = inject(FieldTypesService);

  fieldSettings = computed(() => {
    const field = this.formService.selectedField();
    if (!field) return [];

    const fieldDef = this.fieldTypesService.getFieldType(field.type);
    return fieldDef?.settingsConfig || [];
  });
}
