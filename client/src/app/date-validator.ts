import { AbstractControl } from "@angular/forms";

export function DateValidator(c: AbstractControl): { [ key: string]: boolean} | null { 
    
    
    if(c.value === null || c.value === undefined || c.value === '') {
        return { 'dateInvalid': true };
    }
      
    if ((c.value !== undefined && c.value !== '' && c.value != null )) {
        let dateValue : Date = c.value;

        const dd = String(dateValue.getDate()).padStart(2, '0');
        const mm = String(dateValue.getMonth() + 1).padStart(2, '0');
        const yyyy = dateValue.getFullYear();

        let dateValueString: any = mm + '/' + dd + '/' + yyyy;
        const dateRegex = /^02\/(?:[01]\d|2\d)\/(?:19|20)(?:0[048]|[13579][26]|[2468][048])|(?:0[13578]|10|12)\/(?:[0-2]\d|3[01])\/(?:19|20)\d{2}|(?:0[469]|11)\/(?:[0-2]\d|30)\/(?:19|20)\d{2}|02\/(?:[0-1]\d|2[0-8])\/(?:19|20)\d{2}$/;
        if(!dateValueString.match(dateRegex)) {
            return { 'dateInvalid': true };
        }
    }
    return null;
}