import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  @Input()
  valuesFromHome: any;

  registerModel: any = {};


  constructor() { }

  ngOnInit() {
  }


  register() {
    console.log(this.registerModel);


  }


  cancel() {

  }
}
