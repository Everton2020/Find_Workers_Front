import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';
import { ProdutoComponent } from './produto/produto.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';
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
  {path: 'feed', component: FeedComponent },
  { path: 'cadastro-categoria',component:PostCategoriaComponent},
  { path:  'editar-produto/:id', component: PutProdutoComponent},
  { path:  'delete-produto/:id', component: DeleteProdutoComponent},
  { path:  'editar-categoria/:id', component: PutCategoriaComponent},
  {path:  'delete-categoria/:id', component: DeleteCategoriaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }