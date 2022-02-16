import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profileForm!: FormGroup;
  private userId: any;
  username: any;
  email: any;
  age: any;


  constructor(
    private fb:FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.username = null;
      this.email = "UserEmail";
      this.age = 42;


    this.profileForm = this.fb.group({
      username: new FormControl(this.username, [Validators.required]),
      email: new FormControl(this.email),
      age: new FormControl(this.age, [Validators.required]),
    })
  }
  public submit() {
    console.warn('Your profile has been modified', this.profileForm.value);
    const { username, age } = this.profileForm.value;
    let data;
    if (age) data = { age };
    if (username) data = { ...data, username };
    console.log('data', data);
  }
}