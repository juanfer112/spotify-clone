import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {tap} from 'rxjs/operators'
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly URL = environment.api;
  
  constructor(private http:HttpClient, private cookie:CookieService) { }

  sendCredentials(email:string, password:string):Observable<any> {
    const body = {
      "email":email,
      "password":password
    }
    return this.http.post(`${this.URL}/auth/login`,body).pipe(
      tap((responseOk:any)=>{
        const {tokenSession, data} = responseOk;
        this.cookie.set('token_auth',tokenSession, 4, '/')
      })
    )
    
  }
}
