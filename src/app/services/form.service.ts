import {Injectable, signal} from '@angular/core';
import {IFormRow} from "../models/form";
import {IFormField} from "../models/field";

@Injectable({
    providedIn: 'root'
})
export class FormService {

    private _rows = signal<IFormRow[]>([])
    public readonly rows = this._rows.asReadonly()

    constructor() {
        this._rows.set([
            {
                id: crypto.randomUUID(),
                fields: [],
            }
        ])
    }

    addField(field: IFormField, rowId: string, index?: number) {
        const rows = this._rows();
        const newRows = rows.map(row => {
            if (row.id === rowId) {
                const updatedFields = [...row.fields];
                if (index !== undefined) {
                    updatedFields.splice(index, 0, field);
                } else {
                    updatedFields.push(field);
                }
                return {...row, fields: updatedFields};
            }
            return row;
        })
        this._rows.set(newRows);
    }

    deleteField(fieldId: string) {
        const rows = this._rows();
        const newRows = rows.map(row => ({
            ...row,
            fields: row.fields.filter(f => f.id !== fieldId)
        }))
        this._rows.set(newRows);
    }

    addRow() {
        const newRow: IFormRow = {
            id: crypto.randomUUID(),
            fields: [],
        }
        const rows = this._rows();
        this._rows.set([...rows, newRow]);
    }

    deleteRow(rowId: string) {
        if (this._rows().length === 1) {
            return;
        }
        const rows = this._rows();
        const newRows = rows.filter(row => row.id !== rowId);
        this._rows.set(newRows);
    }
}
