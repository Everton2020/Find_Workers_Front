import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShower } from '@fortawesome/free-solid-svg-icons';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()
  user: User = new User()
  senha: string
  nome: string
  usuario: string


  constructor(
  private authService: AuthService,
  private router: Router,
  private alerta: AlertasService

  ) { }
  ngOnInit() {}
    
    
    entrar()
    {
        this.authService.logar(this.userLogin).subscribe((resp: UserLogin)=> {
          this.userLogin = resp
          //environment.token = this.userLogin.token 
          localStorage.setItem('token',this.userLogin.token)
          localStorage.setItem('nome', this.userLogin.nome)
          localStorage.setItem('imagem', this.userLogin.imagem)
          this.router.navigate(['/perfil'])
        }, erro=> {
          if(erro.status=="500"){
            this.alerta.showAlertDanger("Dados Incorretos")
            }
            else
            {
            this.alerta.showAlertDanger("Dados Incorretos")
            }
            })
      }
  }



  

