import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nuevoUsuario = { username: '', password: '', name: '' };
  usuariosCreados: any[] = [];
  isToastOpen = false;

  constructor(private router: Router) {
    const usuariosCache = localStorage.getItem('usuariosCreados');
    if (usuariosCache) {
      this.usuariosCreados = JSON.parse(usuariosCache);
    }
  }

  ngOnInit() {
    console.log("");
  }

  register() {
    if (this.nuevoUsuario.username && this.nuevoUsuario.password && this.nuevoUsuario.name) {
      this.usuariosCreados.push({ ...this.nuevoUsuario });
      localStorage.setItem('usuariosCreados', JSON.stringify(this.usuariosCreados));
      this.setOpen(true);
      setTimeout(() => {
        let extras: NavigationExtras = {
          replaceUrl: true
        };
        this.router.navigate(['login'], extras);
      }, 2000);
    }
  }
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

}
