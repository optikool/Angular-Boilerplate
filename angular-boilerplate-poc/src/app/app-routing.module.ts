import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { InstructionsComponent } from './views/instructions/instructions.component';
import { AnswerComponent } from './views/answer/answer.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "instructions", component: InstructionsComponent },
  { path: "answer", component: AnswerComponent },
  { path: "home", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
