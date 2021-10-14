import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{User} from 'src/models/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  Login(s:User){
      return this.http.post<number>("https://localhost:44332/api/User/Login",s);
  }
  AddUser(s:User){
    return this.http.post<number>("https://localhost:44332/api/User/AddUser",s);
}
  constructor(public http: HttpClient) { }
}
