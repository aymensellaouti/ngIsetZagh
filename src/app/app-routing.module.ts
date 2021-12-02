import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CvComponent} from "./cv/cv/cv.component";
import {TodoComponent} from "./todo/todo/todo.component";
import {ColorComponent} from "./components/color/color.component";
import {MiniWordComponent} from "./directives/mini-word/mini-word.component";
import {DetailCvComponent} from "./cv/detail-cv/detail-cv.component";
import {NF404Component} from "./components/nf404/nf404.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  { path: '', component: CvComponent},
  { path: 'cv', component: CvComponent},
  { path: 'cv/:id', component: DetailCvComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'color', component: ColorComponent},
  { path: 'word', component: MiniWordComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: NF404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
