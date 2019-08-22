import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient) { }

  login(loginModel: any) {

    let url = this.baseUrl + 'login';

    return this.http.post(url, loginModel)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            alert(user.token);
            console.log(user.token);
          }
        })
      );
  }


  register(registerModel: any) {
    return this.http.post(this.baseUrl + "register", registerModel);
  }
}
