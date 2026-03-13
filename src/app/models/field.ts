import { Type } from '@angular/core';

export interface IFieldTypeDefinition {
  type: string;
  label: string;
  icon: string;
  defaultConfig: any;
  settingsConfig: IFieldSettingsDefinition[];
  component: Type<unknown>;
  generateCode: (field: IFormField) => string;
}

export interface IFieldSettingsDefinition {
  type: 'text' | 'checkbox' | 'select' | 'dynamic-options';
  key: string;
  label: string;
  options: IOptionItem[];
}

export interface IOptionItem {
  label: string;
  value: string;
}

export interface IFormField {
  id: string;
  type: string;
  label: string;
  required: boolean;
  inputType?: string;
  placeholder?: string;
  options?: IOptionItem[];
}
