import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertifyService } from './alertify.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient, private alertify: AlertifyService) { }

  login(loginModel: any) {

    let url = this.baseUrl + 'login';

    return this.http.post(url, loginModel)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);

            this.decodedToken = this.jwtHelper.decodeToken(user.token);

            this.alertify.success(user.message);
          }
        })
      );
  }


  register(registerModel: any) {
    return this.http.post(this.baseUrl + "register", registerModel);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
