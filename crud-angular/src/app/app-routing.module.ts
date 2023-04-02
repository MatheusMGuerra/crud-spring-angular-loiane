import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // COm esse código, se o caminho estiver vazio, a aplicação apontará diretamente para a aba 'cursos'. Além disso, o 'pathMatch:full' vai garantir que toda a URL seja analisada.
  // redirectTo:cursos só vai funcionar  com o segundo path criado.
  {path:'', pathMatch:'full', redirectTo:'cursos'},
  //Abaixo será implementada a rota para o módulo cursos através de lazy loading. Código pronto retirado diretamente da documentação do Angular.io. 
  //A rota está apontando diretamente para o módulo, não para o componente. Mas la no arquivo cursos-routing.module.ts foi criada uma outra rota que finalmente vai apontar para o cursos-comp.component
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  }
  //Depois de criadas as duas rotas, basta adicionar a tag de router-outlet la no app-component.html
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
