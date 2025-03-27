import { Component } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {
  public loggedUser:User=JSON.parse(sessionStorage.getItem("loggedUser")!) as User;


}
