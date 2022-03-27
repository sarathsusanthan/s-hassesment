import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'list',component:ListComponent},
{path:'result',component:ResultComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
