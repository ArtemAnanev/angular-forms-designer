import { Injectable } from '@angular/core';
import { IFieldTypesDefinitions } from '../models/ifield-types-definitions';

const TEXT_FIELD_DEFINITION = {
  type: 'text',
  label: 'Text Field',
  icon: 'text_fields'
}

const CHECKBOX_FIELD_DEFINITION = {
  type: 'checkbox',
  label: 'Checkbox',
  icon: 'check_box',
};

// interface FieldTypeDefinition {
//   type: string;
//   label: string;
//   icon: string;
// }

@Injectable({
  providedIn: 'root'
})
export class FieldTypesService {

  fieldTypes = new Map<string, IFieldTypesDefinitions>([
    ['text', TEXT_FIELD_DEFINITION],
    ['checkbox', CHECKBOX_FIELD_DEFINITION]
  ]);

  getAllFieldTypes(): IFieldTypesDefinitions[] {
    return Array.from(this.fieldTypes.values());
  }

  constructor() { }
}
