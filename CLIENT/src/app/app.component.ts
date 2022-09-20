import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../app/_models/user';
import {AccountService} from '../app/_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;


  myObservable: any;
  myPromise: any;


  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
      this.getCurrentUser();
  }


  getCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    console.log("user object in appcomponent");
    console.log(user);
    this.accountService.setCurrentUser(user);
  }



}
