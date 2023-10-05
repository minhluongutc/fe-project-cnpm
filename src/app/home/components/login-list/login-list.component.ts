import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css'],
})
export class LoginListComponent implements OnInit {
  loginMode: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  goToLogin() {
    this.loginMode = true;
  }

  goToRegister() {
    this.loginMode = false;
  }

}
