import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeAreaComponent } from './components/back-office-area/back-office-area.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

const routes: Routes = [
  { path : 'login', component : LoginComponent},
  { path : 'create-account', component : CreateAccountComponent},
  { path : 'back-office-area', component : BackOfficeAreaComponent},
  { path : '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
