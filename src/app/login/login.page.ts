import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/Authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   user = {
    usuario: 'pleno',
    password: 'pleno'
  };
  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.auth.setLoggedIn(true);
    this.router.navigateByUrl('/', { skipLocationChange: false });
  }

  logout() {
    this.auth.setLoggedIn(false);
    this.router.navigateByUrl('/');
  }

}
