import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component'
import { PortfolioComponent } from './portfolio/portfolio.component';
import { VtesComponent } from './vtes/vtes.component';

const routes: Routes = [
  { path : '', component: InicioComponent },
  { path: 'Portada', component: PortfolioComponent },
  { path: 'vtes', component: VtesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
