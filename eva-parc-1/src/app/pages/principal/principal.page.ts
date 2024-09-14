import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl:'./principal.page.html',
  styleUrls: ['./principal.page.scss'],

})
export class PrincipalPage implements OnInit {

  usuarioLogin: any;
  usuario: string = '';
  usuariosCreados: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation()?.extras;

    if(extras?.state) {
      this.usuario = extras.state["usuario"];
      this.usuariosCreados = extras.state["usuariosCreados"];
      const usuarioLogin = this.usuariosCreados.find(
        cred => cred.username === this.usuario);
        if(usuarioLogin){
          this.usuarioLogin = usuarioLogin;
          this.usuario = usuarioLogin.name.toUpperCase();
        }
    }
  }

  cerrarSEsion() {
    let extras: NavigationExtras = {
      state: {usuariosCreados:this.usuariosCreados},
      replaceUrl: true
    };
    this.router.navigate(['login'], extras);
  }

  editarUsuario(){
    let extras: NavigationExtras = {
      state: {usuario:this.usuarioLogin,
              usuariosCreados:this.usuariosCreados},
      replaceUrl: true
    };
    this.router.navigate(['change-pwd'], extras);
  }
}
