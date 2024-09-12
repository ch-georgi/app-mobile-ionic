import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_user: string = '';
  mdl_pass: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("Creación de Login");
  }

  navegar() {
    // NAVEGACIÓN CON PARÁMETROS
    let extras: NavigationExtras = {
      state: {
        "usuario": this.mdl_user,
        "contrasena": this.mdl_pass,
      },
      replaceUrl: true
    }

    this.router.navigate(['principal'], extras);
  }

}

