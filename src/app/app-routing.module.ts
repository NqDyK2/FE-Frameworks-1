import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./components/Admin/dashboard/dashboard.component"
import {ProductMannagerComponent} from "./components/Admin/Products/product-mannager/product-mannager.component"
import { WorksAddComponent } from './components/Admin/Works/works-add/works-add.component';
import { WorksManagerComponent } from './components/Admin/Works/works-manager/works-manager.component';
import { BlogComponent } from './components/blog/blog.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeuserComponent } from './components/homeuser/homeuser.component';
import { LoginComponent } from './components/Login+Register/login/login.component';
import { RegisComponent } from './components/Login+Register/regis/regis.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { WorkComponent } from './components/work/work.component';
import { AdminComponent } from './Layouts/admin/admin.component';
import { ClientComponent } from './Layouts/client/client.component';
// import {HomeComponent} from "./components/LastUser/home/home.component"
const routes: Routes = [
  {
    path:"",component:ClientComponent, children:[
      {
        path:"home" , component: HomeuserComponent
      },
      {
        path:"blog", component: BlogComponent
      },
      {
        path:"works", component: WorkComponent
      },
      {
        path:"detail/:id",component:DetailComponent
      }
    ]
  },
  {
    path:'admin', component:AdminComponent, children :[
      {path:'products', component: ProductMannagerComponent ,children:[]},
      {path:'products/add', component: ProductAddComponent},
      {path:'product/edit/:id',component:ProductAddComponent},
      {path:'works',component:WorksManagerComponent},
      {path:"works/add",component:WorksAddComponent}
    ]
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"register", component:RegisComponent
  }
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
