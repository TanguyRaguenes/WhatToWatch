import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  private readonly authService:AuthService = inject(AuthService)
  public isUserLogged:boolean=false;

  ngOnInit(): void {
    this.authService.loggedUser.asObservable().subscribe(
      value=>value.username!=''?this.isUserLogged=true:this.isUserLogged=false
    )
  }

  public logout(){
    this.authService.logout()
  }
}
