import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/pages/login/login.component';
import { ModerationComponent } from './app/pages/moderation/moderation.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: LoginComponent }, // Home/Login
      { path: 'moderation', component: ModerationComponent }
    ], withComponentInputBinding()),
    provideHttpClient(), // Provide HTTP Client
  ],
}).catch(err => console.error(err));
