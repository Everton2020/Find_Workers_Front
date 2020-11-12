import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastreProdutoComponent } from './cadastre-produto/cadastre-produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreComponent } from './sobre/sobre.component';
import { UserPerfilComponent } from './user-perfil/user-perfil.component';


const routes: Routes = [

  {path:'', redirectTo: 'home', pathMatch: 'full'},
  { path:'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'produto', component: ProdutoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'user-perfil', component: UserPerfilComponent},
  { path: 'cadastre-produto', component: CadastreProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }