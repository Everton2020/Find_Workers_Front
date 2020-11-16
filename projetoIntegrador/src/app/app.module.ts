import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProdutoComponent } from './produto/produto.component';
import { SobreComponent } from './sobre/sobre.component';
import { PerfilLateralComponent } from './perfil-lateral/perfil-lateral.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPerfilComponent } from './user-perfil/user-perfil.component';
import { FeedComponent } from './feed/feed.component';
import { PostCategoriaComponent } from './post-categoria/post-categoria.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { AlertasComponent } from './alertas/alertas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ProdutoComponent,
    SobreComponent,
    PerfilLateralComponent,
    CadastroComponent,
    UserPerfilComponent,
    FeedComponent,
    PostCategoriaComponent,
    PutProdutoComponent,
    PutCategoriaComponent,
    DeleteProdutoComponent,
    DeleteCategoriaComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    OrderModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
