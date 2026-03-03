import {Component, inject} from '@angular/core';
import {CdkDragDrop, DragDropModule} from '@angular/cdk/drag-drop';
import {FormService} from "../../../services/form.service";
import {IFieldTypeDefinition, IFormField} from "../../../models/field";
import {FormField} from "../form-field/form-field";

@Component({
    selector: 'app-form-editor',
    imports: [DragDropModule, FormField],
    template: `
        <div class="p-4">
            @for (row of formService.rows(); track row.id) {
                <div cdkDropList
                     (cdkDropListDropped)="onDropInRow($event, row.id)"
                     [cdkDropListOrientation]="'mixed'"
                     class="p-5 pt-2 bg-white rounded-lg border-2 border-dashed border-gray-200"
                >
                    <div>Row</div>
                    <div class="flex gap-4 flex-wrap">
                        @for (field of row.fields; track field.id) {
                            <app-form-field class="flex-1" [field]="field" />
                        }
                    </div>
                </div>
            }
        </div>
    `,
    standalone: true,
    styles: ``,
})
export class FormEditor {

    formService = inject(FormService);

    onDropInRow(event: CdkDragDrop<string>, rowId: string) {
        console.log('FormEditor onDropInRow', event);
        if (event.previousContainer.data === 'field-selector') {
            const fieldType = event.item.data as IFieldTypeDefinition
            const newField: IFormField = {
                id: crypto.randomUUID(),
                type: fieldType.type,
                ...fieldType.defaultConfig,
            }
            this.formService.addField(newField, rowId, event.currentIndex)
            return;
        }
    }
}
