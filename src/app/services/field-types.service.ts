import { Injectable } from '@angular/core';
import { IFieldTypeDefinition } from '../models/field';
import { TextField } from '../components/field-types/text-field/text-field';
import { CheckboxField } from '../components/field-types/checkbox-field/checkbox-field';
import { SelectField } from '../components/field-types/select-field/select-field';
import { DatepickerField } from '../components/field-types/datepicker-field/datepicker-field';

const TEXT_FIELD_DEFINITION = {
  type: 'text',
  label: 'Text Field',
  icon: 'text_fields',
  defaultConfig: {
    label: 'Text Field',
    required: false,
  },
  settingsConfig: [
    { type: 'text', key: 'label', label: 'Label' },
    { type: 'text', key: 'placeholder', label: 'Placeholder' },
    { type: 'checkbox', key: 'required', label: 'Required' },
    {
      type: 'select',
      key: 'inputType',
      label: 'Input Type',
      options: [
        { value: 'text', label: 'Text' },
        { value: 'number', label: 'Number' },
        { value: 'email', label: 'Email' },
        { value: 'tel', label: 'Phone' },
      ],
    },
  ],
  component: TextField,
  generateCode: (field: { label: any; inputType: any; required: any; placeholder: any }) => `
      <mat-form-field appearance="outline" class="w-full">
        <mat-label>${field.label}</mat-label>
        <input matInput 
        type="${field.inputType || 'text'}" 
        [required]="${field.required}" 
        placeholder="${field.placeholder}"/>
      </mat-form-field>
  `,
};

const CHECKBOX_FIELD_DEFINITION = {
  type: 'checkbox',
  label: 'Checkbox',
  icon: 'check_box',
  defaultConfig: {
    label: 'Checkbox',
    required: false,
  },
  settingsConfig: [
    { type: 'text', key: 'label', label: 'Label' },
    { type: 'checkbox', key: 'required', label: 'Required' },
  ],
  component: CheckboxField,
  generateCode: (field: { required: any; label: any }) => `<mat-checkbox [required]="${field.required}">${field.label}</mat-checkbox>\n`,
};

const SELECT_FIELD_DEFINITION = {
  type: 'select',
  label: 'Dropdown',
  icon: 'arrow_drop_down_circle',
  component: SelectField,
  defaultConfig: {
    label: 'Select',
    required: false,
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
  settingsConfig: [
    { type: 'text', key: 'label', label: 'Label' },
    { type: 'checkbox', key: 'required', label: 'Required' },
    { type: 'dynamic-options', key: 'options', label: 'Dropdown Options' },
  ],
  generateCode: (field: { label: any; required: any; options: any[] }) => {
    let code =
      ` <mat-form-field appearance="outline" class="w-full">\n` +
      ` <mat-label>${field.label}</mat-label>\n` +
      ` <mat-select [required]="${field.required}">\n`;
    if (field.options) {
      field.options.forEach(option => {
        code += `<mat-option [value]="${option.value}">${option.label}</mat-option>\n`;
      });
    } else {
      code +=
        `<mat-option value="option1">Option 1</mat-option>\n` +
        `<mat-option value="option2">Option 2</mat-option>\n` +
        `<mat-option value="option3">Option 3</mat-option>\n`;
    }
    code += `  </mat-select>\n` + `  </mat-form-field>\n`;
    return code;
  },
};

const DATEPICKER_FIELD_DEFINITION: IFieldTypeDefinition = {
  type: 'date',
  label: 'Date Picker',
  icon: 'calendar_today',
  component: DatepickerField,
  defaultConfig: {
    label: 'Date Picker',
    required: false,
  },
  settingsConfig: [
    { type: 'text', key: 'label', label: 'Label' },
    { type: 'checkbox', key: 'required', label: 'Required' },
  ],
  generateCode: (field: { label: any; id: any }) =>
    `<mat-form-field appearance="outline" class="w-full">\n` +
    ` <mat-label>${field.label}</mat-label>\n` +
    ` <mat-datepicker-toggle #matIconSuffix [for]="picker${field.id}"></mat-datepicker-toggle>\n` +
    ` <mat-datepicker #picker${field.id}></mat-datepicker>\n` +
    `</mat-form-field>\n`,
};

@Injectable({
  providedIn: 'root',
})
export class FieldTypesService {
  // @ts-ignore
  fieldTypes = new Map<string, IFieldTypeDefinition>([
    ['text', TEXT_FIELD_DEFINITION],
    ['checkbox', CHECKBOX_FIELD_DEFINITION],
    ['select', SELECT_FIELD_DEFINITION],
    ['date', DATEPICKER_FIELD_DEFINITION]
  ]);

  getFieldType(type: string): IFieldTypeDefinition | undefined {
    return this.fieldTypes.get(type);
  }

  getAllFieldTypes(): IFieldTypeDefinition[] {
    return Array.from(this.fieldTypes.values());
  }
}
