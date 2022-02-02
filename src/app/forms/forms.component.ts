import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {range} from "rxjs";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  foods: Food[] = [
    {value: 'React', viewValue: 'React'},
    {value: 'Vue', viewValue: 'Vue'},
    {value: 'Angular', viewValue: 'Angular'},
  ];

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    range: new FormGroup({
      start: new FormControl('none'),
    }),
    technology: new FormControl(''),
  });


  constructor() {

  }



  onSubmit() {
    // const dateOfBirth = this.range.value.toString();
    // console.log(dateOfBirth.split('T', 10)[0]);
    // console.log(this.range.value);
    console.log(this.profileForm.value);
    this.profileForm.reset();
  }

  ngOnInit(): void {
  }

}

