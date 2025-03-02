import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component'; // Import Navbar

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent], // Add NavbarComponent
  template: `
    <app-navbar></app-navbar> <!-- Display Navbar -->
    <router-outlet></router-outlet> <!-- Load pages dynamically -->
  `
})
export class AppComponent {}
