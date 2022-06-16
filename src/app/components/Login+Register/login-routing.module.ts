import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './regis/regis.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: RegisComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}