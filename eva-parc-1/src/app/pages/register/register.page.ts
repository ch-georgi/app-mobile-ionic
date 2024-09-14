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
  isToastOpenCreated = false;
  isToastOpenError = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log("");
    let extras = this.router.getCurrentNavigation()?.extras;

    if(extras?.state) {
      this.usuariosCreados = extras.state["usuariosCreados"];
      console.log(extras.state);
    }else {
      this.usuariosCreados = [];
    }
    console.log(this.usuariosCreados);
  }

  register() {
    if (this.nuevoUsuario.username && this.nuevoUsuario.password && this.nuevoUsuario.name) {
      console.log("campos rellenados ok");
      console.log(this.nuevoUsuario);
      const usuario = this.usuariosCreados.find(
        cred => cred.username === this.nuevoUsuario.username);
      if(usuario){
        console.log(usuario);
        this.setOpenError(true);
        this.nuevoUsuario.username = '';
        this.nuevoUsuario.password = '';
        this.nuevoUsuario.name = '';
        return;
      }else{
        console.log("no se encontro usuario con username "+this.nuevoUsuario.username);
        this.usuariosCreados.push({ ...this.nuevoUsuario });
      this.setOpenCreated(true);
      setTimeout(() => {
        this.volver();
      }, 2000);
      }      
    }
  }
  setOpenCreated(isOpen: boolean) {
    this.isToastOpenCreated = isOpen;
  }
  setOpenError(isOpen: boolean) {
    this.isToastOpenError = isOpen;
  }
  volver(){
    let extras: NavigationExtras = {
      state: {usuariosCreados:this.usuariosCreados},
      replaceUrl: true
    };
    this.router.navigate(['login'], extras);
  }

}
