import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly authService:AuthService=inject(AuthService)

    public loginForm:FormGroup=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })

    public onSubmit(){
      if(this.loginForm.valid){
        this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      }
    }
}
