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
  isToastOpen = false;
  spinnerVisible = false;
  usuariosCreados: any[] = [];

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

  login(){
    console.log("usuario: "+this.mdl_user);
    console.log("pass: "+this.mdl_pass);

    const usuario = this.usuariosCreados.find(
      cred => cred.username === this.mdl_user && cred.password === this.mdl_pass
    );

    if (usuario) {
      this.spinnerVisible = true;
      let extras: NavigationExtras = {
        state: { usuario: this.mdl_user,
                  usuariosCreados:this.usuariosCreados
                },
        replaceUrl: true
      }
      setTimeout(() => {
        this.spinnerVisible = false;
        this.router.navigate(['principal'], extras);
      }, 3000);
    }else{
      console.log("Error de credenciales");
      this.setOpen(true);
    }
  }
  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
  nuevoUsuario(){
    let extras: NavigationExtras = {
      state: {usuariosCreados:this.usuariosCreados},
      replaceUrl: true
    };
    this.router.navigate(['register'], extras);
  }
  
}
