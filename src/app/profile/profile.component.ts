import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
 
export class ProfileComponent implements OnInit {
  public profileForm!: FormGroup;
  user$ = this.authService.currentUser$;
  
  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    // private userService: UserService,
    ) {
  }

  ngOnInit(): void { 
    console.log(this.user$.forEach(item => console.log(item?.email)))
      this.profileForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl(''),
      age: new FormControl(42, [Validators.required]),
    })  
    
  }
}
