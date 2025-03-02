import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  // ✅ Login Method
  login(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.authService.storeToken(response.token); // Store the token
        this.router.navigate(['/moderation']); // Redirect to moderation page
      },
      error: () => {
        this.errorMessage = 'Invalid credentials';
      },
    });
  }

  // ✅ Logout Method
  logout(): void {
    localStorage.removeItem('token'); // Remove token from storage
    this.router.navigate(['/']); // Redirect to login page
  }
}
