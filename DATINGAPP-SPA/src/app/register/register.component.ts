import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output()
  cancelRegister = new EventEmitter();

  registerModel: any = {};


  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }


  register() {
    this.authService.register(this.registerModel).subscribe(() => {
      console.log('Register başarılı');
    }, error => {
      alert(error),
        this.alertify.error(error);
    });

  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('İptal Edildi');
  }
}
