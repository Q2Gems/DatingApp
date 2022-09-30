import { User } from './../_models/user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  //loggedIn: boolean;

  currentUser$: Observable<User>;


  constructor(private accountService: AccountService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.currentUser$ = this.accountService.currentUser$;
  }


  login(){
    console.log(this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/members')
      //this.loggedIn = true;
    });
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/')
    //this.loggedIn = false;
  }

}
