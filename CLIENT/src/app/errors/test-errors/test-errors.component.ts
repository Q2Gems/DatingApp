import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {

  baseUrl='http://localhost:5000/api/';
  validationErrors: string[] = [];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
  }

  get404Error(){
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe(res => {
      console.log(res)
    }, error => {
      console.log(error);

    });
  }


  get500Error(){
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe(res => {
      console.log(res)
    }, error => {
      console.log(error);
    });
  }

  get400Error(){
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(res => {
      console.log(res)
    }, error => {
      console.log(error);
    });
  }

  get401Error(){
    this.http.get(this.baseUrl + 'buggy/auth').subscribe(res => {
      console.log(res)
    }, error => {
      console.log(error);
    });
  }

  get400ValidationError(){
    this.http.post(this.baseUrl + 'Account/register', {}).subscribe(res => {
      console.log(res)

    }, error => {
      console.log("validation error");
      console.log(error);
      this.validationErrors = error;
    });
  }

}
