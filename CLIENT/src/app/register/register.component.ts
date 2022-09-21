import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //@Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  register(){
    this.accountService.register(this.model).subscribe(response =>{
      console.log(response);
      this.cancel();
    }, error=>{
      console.log(error);
      this.toastr.error(error.error);
    },()=>{
      console.log('register completed');
      this.toastr.success('Register Complete')
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
