import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ModerationComponent } from './pages/moderation/moderation.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirects to login page by default
  { path: 'login', component: LoginComponent },
  { path: 'moderation', component: ModerationComponent }
];

export default routes; // ✅ Use default export
