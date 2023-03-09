import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  public wrongUser = false;
  public hidenPassword = true;
  ngOnInit(): void {
  }

  public hideAlertMessage(): void {
    this.wrongUser = false;
  }

  public showPassword(): boolean {
    this.hidenPassword = !this.hidenPassword;
    return this.hidenPassword;
  }

  public login(){
    
  }

}
