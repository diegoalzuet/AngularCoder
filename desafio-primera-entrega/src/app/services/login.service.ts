import { environment } from './../../environments/environment.prod';
import { Observable, of } from 'rxjs';
import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private registeredUser: User[] = [];
  private url = environment.moviesRestApi + 'registered_users';

  constructor(
    private httpClient : HttpClient
  ) {
    this.getList().subscribe(
      users => this.registeredUser = users
    )
  }
  getList():Observable<User[]>{
    return this.httpClient.get<User[]>(this.url);
  }
  validateUser(user:string ,password:string): Boolean{
    const u = this.registeredUser.find(u=>u.user.toLowerCase() === user.toLowerCase() && u.password===password )
    return u!=undefined;
  }
}
