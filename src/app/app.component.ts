import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth/auth.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-mini-steam';

    constructor(public authService: AuthService) {}
}