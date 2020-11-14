import { Component, OnInit } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {
  
  nome: string

  faFacebook = faFacebook
  faInstagram = faInstagram
  faLinkedin  = faLinkedin
  constructor() { }

  ngOnInit(){
    this.nome = 'Everton Souza Silva'
  }

  mostraTexto(pessoa: string){
   let texto = document.getElementById("textoSobre")
   if(pessoa == "daiana")
   {
      texto.innerHTML = "Escolhi a graduação em Matemática por gostar dos números, e lá conheci algumas linguagens de programação, o que me despertou o desejo de conhecer mais e me aventurar no mundo da tecnologia,"
   }

   if(pessoa == "francco")
   {
      texto.innerHTML = "Paulista, de 26 anos, curioso e extremamente apaixonado por tecnologia.Trabalhei por muito tempo na área de atendimento,onde adquiri muita comunicação e trabalho em equipe que vão me ajudar muito nessa nova jornada."
   }

   if(pessoa == "everton")
   {
      texto.innerHTML = "Jovem e com muita paixão por aprender, possuo cinco anos de experiência na área de vendas na qual  me favoreceu com qualidades como comunicação interpessoal e persuasão, sempre me destaquei pelas empresas, nas quais prestei serviço. Agora procuro seguir uma carreira na  área de tecnologia com o propósito de me tornar um profissional ainda mais completo agregando meus conhecimentos a mesma."
   }

   if(pessoa == "gabriela")
   {
      texto.innerHTML = "Gestora de Pessoas por formação, vi na tecnologia um caminho muito mais amplo para impactar a vida de pessoas com soluções criativas e esperança. Amante de livros, filmes e de um bom hambúrguer."
   }

   if(pessoa == "valber")
   {
      texto.innerHTML = "Sou uma pessoa responsável e que gosta de trabalhar em equipe para entregar resultados. Além disso, tenho um perfil conciliador que me ajuda a lidar com diversas situações com facilidade. Estou sempre aberto às oportunidades e valorizo muito a integridade e o trabalho como formas de aprendizado."
   }

   if(pessoa == '')
   {
     texto.innerHTML = ''
   }


  }


}