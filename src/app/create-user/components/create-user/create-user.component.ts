import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent{
  onSubmit(form: NgForm){
    if (form.name==="password"){
      console.log("");
    }
    else {
    console.log(form.value);
    }
  }
}
