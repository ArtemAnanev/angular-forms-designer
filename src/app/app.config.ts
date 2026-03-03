import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";

export const appConfig: ApplicationConfig = {
  providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      {
          provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: {
              appearance: 'outline',
              subscriptSizing: 'dynamic',
          },
      },
  ],
};
