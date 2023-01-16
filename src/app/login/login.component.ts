import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _loginService: LoginService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      email: [`valeri.kharitonashvili1@gmail.com`],
      password: [`123123123`]
    })
  }

  login() {
    this._loginService.login(this.form.value).subscribe(
      res => {
        localStorage.setItem('user', JSON.stringify(res));
        this._router.navigateByUrl('/profile')
      },
      err => {
        console.log(err)
      }
    )
  }

}
