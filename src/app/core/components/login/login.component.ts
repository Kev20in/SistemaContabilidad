import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,

  ) { }
  public wrongUser = false;
  public hidenPassword = true;
  public loginForm: FormGroup;


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: new FormControl(''),
      password: new FormControl(''),
    });
  }

  public hideAlertMessage(): void {
    this.wrongUser = false;
  }

  public showPassword(): boolean {
    this.hidenPassword = !this.hidenPassword;
    return this.hidenPassword;
  }

  public login(value){

/*     const user = {
      userName: 'User',
      password: '123'
    } */
/*     console.log(user); */

    const trueUser = 'Admin'
    const truePass = '123'

    console.log(this.loginForm.value);
    const user = value.controls['userName'].value
    const pass = value.controls['password'].value
    
    if ( user === trueUser &&  pass === truePass){
      this.router.navigate(['/']);
    }else{
      this.wrongUser = true;    
      console.log(this.wrongUser);
      
    }
  }

}
