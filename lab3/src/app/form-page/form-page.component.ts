import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/user.model';
import {UserService} from '../user.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  isSubmitted = false;
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: [ '', Validators.required],
      age: [ null, Validators.required],
      sex: [ '', Validators.required],
      country: [ '', Validators.required],
      city: [ '', Validators.required]
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.userForm.invalid) {
      return;
    }

    let user: User;
    user = new User(this.userForm.get('name').value,
       this.userForm.get('age').value,
       this.userForm.get('sex').value,
       this.userForm.get('country').value,
       this.userForm.get('city').value);
    console.log(user);
    this.userService.addUser(user);
  }
}
