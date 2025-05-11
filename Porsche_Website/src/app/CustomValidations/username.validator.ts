import { AbstractControl } from "@angular/forms";

export function dynamicForbiddenUserNameValidator(forbiddenName: RegExp){
    
    //AbstractControl represents a form control or form group
    return (control:AbstractControl)=>{
        //Test if the control's value matches the forbidden pattern
        const forbidden = forbiddenName.test(control.value);

        //If it does, return an error object with the control's value. Else, return null
        return forbidden? {'dynamicForbiddenUserNameKey':{value:control.value}}: null;
    }
    
}