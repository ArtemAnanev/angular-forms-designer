import {Component, input} from '@angular/core';
import {IFormField} from "../../../models/field";
import {MatCheckboxModule} from "@angular/material/checkbox";

@Component({
    selector: 'app-checkbox-field',
    imports: [MatCheckboxModule],
    template: `
        <mat-checkbox [required]="field().required">
            {{ field().label }}
        </mat-checkbox>
    `,
    standalone: true,
    styles: ``
})
export class CheckboxField {
    field = input.required<IFormField>();

}
