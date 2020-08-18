import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  imgPass = "eye";
  typePass="password";
  onClickShow(){ 
    this.typePass = this.typePass === 'text' ? 'password' : 'text';
    this.imgPass = this.imgPass === 'eye-off' ? 'eye' : 'eye-off';
  }
}
