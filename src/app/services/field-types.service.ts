import { Injectable } from '@angular/core';
import { IFieldTypeDefinition } from '../models/field';
import {TextField} from "../components/field-types/text-field/text-field";
import {CheckboxField} from "../components/field-types/checkbox-field/checkbox-field";
import { SelectField } from '../components/field-types/select-field/select-field';

const TEXT_FIELD_DEFINITION = {
  type: 'text',
  label: 'Text Field',
  icon: 'text_fields',
  defaultConfig: {
    label: 'Text Field',
    required: false,
  },
  settingsConfig: [
    {type: 'text', key: 'label', label: 'Label'},
    {type: 'text', key: 'placeholder', label: 'Placeholder'},
    {type: 'checkbox', key: 'required', label: 'Required'},
    {type: 'select', key: 'inputType', label: 'Input Type', options: [
        {value: 'text', label: 'Text'},
        {value: 'number', label: 'Number'},
        {value: 'email', label: 'Email'},
        {value: 'tel', label: 'Phone'},
      ],
    },
  ],
  component: TextField,
}

const CHECKBOX_FIELD_DEFINITION = {
  type: 'checkbox',
  label: 'Checkbox',
  icon: 'check_box',
  defaultConfig: {
    label: 'Checkbox',
    required: false,
  },
  settingsConfig: [
    {type: 'text', key: 'label', label: 'Label'},
    {type: 'checkbox', key: 'required', label: 'Required'},
  ],
  component: CheckboxField,
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
      {value: 'option1', label: 'Option 1'},
      {value: 'option2', label: 'Option 2'},
      {value: 'option3', label: 'Option 3'},
    ],
  },
  settingsConfig: [
    {type: 'text', key: 'label', label: 'Label'},
    {type: 'checkbox', key: 'required', label: 'Required'},
    {type: 'dynamic-options', key: 'options', label: 'Dropdown Options'},
  ]
}

@Injectable({
  providedIn: 'root'
})
export class FieldTypesService {
  // @ts-ignore
  fieldTypes = new Map<string, IFieldTypeDefinition>([
    ['text', TEXT_FIELD_DEFINITION],
    ['checkbox', CHECKBOX_FIELD_DEFINITION],
    ['select', SELECT_FIELD_DEFINITION],
  ]);

  getFieldType(type: string): IFieldTypeDefinition | undefined {
    return this.fieldTypes.get(type);
  }

  getAllFieldTypes(): IFieldTypeDefinition[] {
    return Array.from(this.fieldTypes.values());
  }
}
