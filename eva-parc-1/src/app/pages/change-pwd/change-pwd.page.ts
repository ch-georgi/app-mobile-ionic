import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.page.html',
  styleUrls: ['./change-pwd.page.scss'],
})
export class ChangePwdPage implements OnInit {
  usuariosCreados: any[] = [];
  isToastOpenEdited = false;
  isToastOpenErrorEdit = false;
  name: string = '';
  prevPassword: string = '';
  confirmPrevPassword: string = '';
  password: string = '';
  usuario: any;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("");
    let extras = this.router.getCurrentNavigation()?.extras;

    if (extras?.state) {
      this.usuario = extras.state["usuario"];
      this.usuariosCreados = extras.state["usuariosCreados"];
      if (this.usuario) {
        this.name = this.usuario.name;
        this.prevPassword = this.usuario.password;
        console.log(this.usuariosCreados);
      }
    }
  }
  editar() {
    if (this.name && this.password && this.confirmPrevPassword) {
      const usuario = this.usuariosCreados.find(cred => cred.username === this.usuario.username);
      console.log("contraseña anterior: "+this.prevPassword);
      console.log("contraseña confirm: "+this.confirmPrevPassword);
      if(this.confirmPrevPassword == this.prevPassword){
        if (usuario) {
          usuario.name = this.name;
          usuario.password = this.password;
          this.setOpenEdited(true);
          setTimeout(() => {
            this.volver();
          }, 2000);
        }
      }else{
        this.setOpenEditedError(true);
      }
      
    }
  }
  setOpenEdited(isOpen: boolean) {
    this.isToastOpenEdited = isOpen;
  }
  setOpenEditedError(isOpen: boolean) {
    this.isToastOpenErrorEdit = isOpen;
  }
  volver() {
    const usuario = this.usuariosCreados.find(cred => cred.username === this.usuario.username);
    let extras: NavigationExtras = {
      state: { usuario: usuario.name,
        usuariosCreados:this.usuariosCreados
      },
      replaceUrl: true
    };
    this.router.navigate(['principal'], extras);
  }
}