import { AbstractControl } from "@angular/forms";

export function DateValidator(control: AbstractControl): { [ key: string]: boolean} | null { 
    if (control.pristine) {
        return null;
    }
    if ((control.value !== undefined && control.value !== '' && control.value != null )) {
        let dateValue : string = control.value;
        if(dateValue.length !== 10) {
            return { 'dateInvalid': true };
        }
    }
    return null;
}