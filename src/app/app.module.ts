import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
import { ProductMannagerComponent } from './components/Admin/Products/product-mannager/product-mannager.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { AdminComponent } from './Layouts/admin/admin.component';
import { ClientComponent } from './Layouts/client/client.component';
import { LoginComponent } from './components/Login+Register/login/login.component';
import { RegisComponent } from './components/Login+Register/regis/regis.component';
import { Dash1Component } from './components/dash1/dash1.component';
import { HomeuserComponent } from './components/homeuser/homeuser.component';
import { BlogComponent } from './components/blog/blog.component';
import { HeaderClientComponent } from './components/header-client/header-client.component';
import { FooterClientComponent } from './components/footer-client/footer-client.component';
import { WorkComponent } from './components/work/work.component';
import { WorksManagerComponent } from './components/Admin/Works/works-manager/works-manager.component';
import { WorksAddComponent } from './components/Admin/Works/works-add/works-add.component';
import { DetailComponent } from './components/detail/detail.component';

registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    HeaderClientComponent,
    FooterClientComponent,
    WorkComponent,
    LoginComponent,
    RegisComponent,
    AdminComponent,
    ClientComponent,
    BlogComponent,
    DetailComponent,
    AboutComponent,
    Dash1Component,
    HomeuserComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductDetailComponent,
    DashboardComponent,
    ProductMannagerComponent,
    Dash1Component,
    WorksManagerComponent,
    WorksAddComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    HttpClientModule

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
