import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosCompComponent } from './cursos-comp/cursos-comp.component';

const routes: Routes = [
  //Nesse código abaixo, foi criado o path que fará com que a página principal aponte para o componente cursos
  {path:'', component: CursosCompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
