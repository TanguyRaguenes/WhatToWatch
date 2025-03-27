import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private readonly router:Router=inject(Router)

  public login(email:string, password:string):void{

    console.log(`email : ${email} | password : ${password}`)

    const usersStringify:string|null =localStorage.getItem("users")

    if(usersStringify!=null){

      const usersParse:User[] = JSON.parse(usersStringify) as User[]
      usersParse.forEach(element=>console.log(`username : ${element.username} | email : ${element.email} | password: ${element.password }`))
      
      const matchingUser:User=usersParse.filter(element=>element.email==email && element.password==password)[0]

      if(matchingUser){
        sessionStorage.setItem("loggedUser",JSON.stringify(matchingUser))
        alert("Login successful !")
        this.router.navigate(['/profil'])
      }else{
        alert("error !")
      }
    
    }

  }

  public register(user:User):void{

    let usersParse:User[]=[]

    const usersStringify:string|null = localStorage.getItem("users")

    if(usersStringify){

      usersParse=JSON.parse(usersStringify) as User[];

    }
   
    usersParse.push(user)
  
    localStorage.setItem("users", JSON.stringify(usersParse))
    alert("Register successful !")
  }
}
