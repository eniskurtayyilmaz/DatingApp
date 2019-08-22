import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  registerMode = false;
  values: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.httpClient.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
      // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      console.log(error);
    });
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }
}
