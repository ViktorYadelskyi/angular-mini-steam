import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SignInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly mockUser: SignInData = new SignInData(
    'user@mail.com',
    'pass'
  );
  isAuthenticated = false;

  constructor(private router: Router) {}

  authenticate(signInData: SignInData): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      this.router.navigate(['games']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean {
    return (
      this.checkLogin(signInData.getLogin()) &&
      this.checkPassword(signInData.getPassword())
    );
  }

  private checkLogin(login: string): boolean {
    return login === this.mockUser.getLogin();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockUser.getPassword();
  }
}
