import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private readonly authService:AuthService=inject(AuthService)

  public registerForm:FormGroup=new FormGroup({
    username:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required]),
    passwordConfirmation:new FormControl('',[Validators.required])

  })

  public onSubmit(){
    if(this.registerForm.valid){

      const user:User={
        username :this.registerForm.value.username, 
        email: this.registerForm.value.email, 
        password: this.registerForm.value.password}
        
      this.authService.register(user)
    }
  }
}
