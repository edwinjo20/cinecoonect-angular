import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http'; // ✅ Import HttpClient

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), // ✅ Ensure HttpClient is provided
  ],
};
