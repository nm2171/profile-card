import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './page/edit/edit.component';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'edit', component: EditComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
