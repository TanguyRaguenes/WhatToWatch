import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly router:Router=inject(Router)
  public loggedUser:BehaviorSubject<User>=new BehaviorSubject<User>({username:'',email:'',password:''})


  public login(email:string, password:string):void{

    const usersStringify:string|null =localStorage.getItem("users")

    if(usersStringify!=null){

      const usersParse:User[] = JSON.parse(usersStringify) as User[]
      usersParse.forEach(element=>console.log(`username : ${element.username} | email : ${element.email} | password: ${element.password }`))
      const matchingUser:User=usersParse.filter(element=>element.email==email && element.password==password)[0]

      if(matchingUser){

        sessionStorage.setItem("loggedUser",JSON.stringify(matchingUser))
        this.loggedUser.next(matchingUser)
        alert("Login successful !")
        this.router.navigate(['/profil'])

      }else{

        alert("error !")

      }
    
    }

  }

  public logout():void{

    sessionStorage.removeItem("loggedUser")
    this.loggedUser.next({username:'',email:'',password:''})
    this.router.navigate(['/'])

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
