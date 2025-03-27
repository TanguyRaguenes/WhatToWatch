import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfilComponent } from './components/profil/profil.component';
import { authGuard } from './guards/auth.guard';
import { MoviesComponent } from './components/movies/movies.component';

export const routes: Routes = [

{path:"", component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"profil",component:ProfilComponent,canActivate:[authGuard]},
{path:"movies",component:MoviesComponent,canActivate:[authGuard]}


];
