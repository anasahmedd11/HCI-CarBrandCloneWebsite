import { AbstractControl } from "@angular/forms";

export function dynamicForbiddenUserNameValidator(forbiddenName: RegExp){
    
    return (control:AbstractControl)=>{
        const forbidden = forbiddenName.test(control.value);
        return forbidden? {'dynamicForbiddenUserNameKey':{value:control.value}}: null;
    }
    
}