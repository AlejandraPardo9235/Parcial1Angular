import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LiquidarComponent } from './liquidar/liquidar.component';

const routes: Routes = [{path:'main', component: MainComponent},
{path:'liquidar', component:LiquidarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
