import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-editor',
  imports: [DragDropModule],
  template: `
    <div class="p-4">
      <div
        cdkDropList
        (cdkDropListDropped)="onDropInRow($event)"
        class="p-5 bg-white rounded-lg border-2 border-dashed border-gray-200"></div>
    </div>
  `,
  standalone: true,
  styles: ``,
})
export class FormEditor {
  onDropInRow(event: CdkDragDrop<string>) {
    console.log('FormEditor onDropInRow' ,event);

    if (event.previousContainer.data === 'field-selector') {
      //Add field to the row

      return;
    }
  }
}
