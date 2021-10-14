
import { ControlContainer, FormGroup } from '@angular/forms';
export class RangeValidation {

    public static Confirm(pas1: string, pas2: string) {
        return (fg: FormGroup) => {
            let a = fg.controls[pas1].value;
            let b = fg.controls[pas2].value;
            if (a !== b) {
                return { "confirmError": { message: 'אימות הסיסמא אינו תואם' } }
            }
            return null;
        }

    }
    public static NotNegetiv(){
        return(fg: FormGroup)=>
        {
            if(fg.value <0){

                return { "confirmError": { message: 'המספר דקות אינו יכול להיות שלילי' } }

            }return null;

        }
    }


}