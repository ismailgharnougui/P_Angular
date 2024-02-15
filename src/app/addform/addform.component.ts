import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent {
addForm!:FormGroup;
ngOnInit() {
  this.addForm = new FormGroup(
    {
      id: new FormControl('', Validators.required),
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      quantite: new FormControl('', Validators.required),
      like: new FormControl('', Validators.required)


    }
  );
}
  save(){
    console.log(this.addForm.value)

  }
}
