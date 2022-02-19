import { Component, OnInit, Input } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
 
export class ProfileComponent implements OnInit {
  user$ = this.authService.currentUser$;
  
  constructor(private authService: AuthenticationService) {
    console.log( 2)
  }

  ngOnInit(): void { }
  @Input() name = 'dsds';
}
