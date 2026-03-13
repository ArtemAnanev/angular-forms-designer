import { Component, inject } from '@angular/core';
import { FieldSettings } from './components/field-settings/field-settings';
import { FormElementsMenu } from './components/form-elements-menu/form-elements-menu';
import { MainCanvas } from './components/main-canvas/main-canvas';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  imports: [FieldSettings, FormElementsMenu, MainCanvas, DragDropModule, MatButton, MatIcon],
  template: `
    <div class="flex flex-col h-screen bg-gray-100 px-4">
      <div class="flex flex-col gap-1 items-center justify-center py-10">
        <h1 class="text-2xl tracking-wide font-medium">Angular Forms Designer</h1>
        <p class="text-gray-500">Create beautiful, responsive forms with Angular Material and TailwindCSS</p>
      </div>
      <div class="flex gap-4 relative" cdkDropListGroup>
        <app-form-elements-menu class="w-64" />
        <app-main-canvas class="flex-1" />
        <app-field-settings class="w-64" />
        <button mat-flat-button class="!absolute -top-[50px] right-0" (click)="formService.exportForm()">
          Export Form
          <mat-icon>download</mat-icon> 
        </button>
         
      </div>
    </div>
  `,
  standalone: true,
})
export class AppComponent {
  formService = inject(FormService);
}
