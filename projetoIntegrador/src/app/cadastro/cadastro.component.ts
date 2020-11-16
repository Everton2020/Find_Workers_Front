import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User()
  senha: string
  nome: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit(){

  }
    conferirSenha(event: any)
    {
      this.senha = event.target.value
    }

    cadastrar()
    {
      if(this.senha === this.user.senha )
      {
        this.authService.cadastrar(this.user).subscribe((resp: User) => {
          this.user = resp
          this.router.navigate(["/login"])
          this.alerta.showAlertSuccess("Usuario Cadastrado com sucesso")
        }, erro => {
          if(erro.status=="500"){
            this.alerta.showAlertDanger("Dados Incompletos")
          }
        })
      }else
      {
        this.alerta.showAlertDanger("Dados Incompletos")
      }
    }

}
