import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
login=new FormControl('',Validators.required);
  pwd=new FormControl('',Validators.required);
  save() {
    console.log(this.login.value)
    console.log(this.pwd.value)

  }
}
