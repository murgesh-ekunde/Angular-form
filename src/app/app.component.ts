import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  validPattern = /[a-zA-Z]+/;
  numberRegEx = /\-?\d*\.?\d{10}/;

  constructor(public formobj : FormBuilder){}
  contactform = this.formobj.group(
   {
   
   adressFormControl : ['', Validators.required],
   cityFormControl: ['',Validators.required, Validators.minLength(4) ],
   pinFormControl : ['', Validators.required, Validators.maxLength(6)],
   phoneFormControl : ['', Validators.required, Validators.pattern(this.numberRegEx)],
   usernameFormControl : ['', Validators.required, Validators.pattern(this.validPattern)]

   }
   
  )
  emailFormControl= new FormControl ('', [Validators.required, Validators.email])
}
