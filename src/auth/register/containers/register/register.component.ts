import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html'
})

export class RegisterComponent {
  constructor(
    private _authService: AuthService,
    private router: Router
  ) {}

  error: string;

  async registerUser(event: FormGroup) {
    // this._authService.createUser(event.value.email, event.value.password) this is the normal use
    // this is the 'destructuring mode'
    const { email, password } = event.value;
    try {
      await this._authService.createUser(email, password);
      this.router.navigate(['/']);
    } catch (err) {
      this.error = err.message;
    }
  }
}
