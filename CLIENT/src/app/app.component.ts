import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/UsersControllers').subscribe(response => {
      this.users = response;
      console.log(this.users);
    }, error => {
      console.log(error);
    });
  }


}