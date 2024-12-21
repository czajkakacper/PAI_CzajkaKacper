import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupClientComponent } from './basic/components/signup-client/signup-client.component';
import { SignupCompanyComponent } from './basic/components/signup-company/signup-company.component';
import { LoginComponent } from './basic/components/login/login.component';
import { SingupComponent } from './basic/components/singup/singup.component';
import { ClientDashboardComponent } from './client/pages/client-dashboard/client-dashboard.component';
import { CompanyDashboardComponent } from './company/pages/company-dashboard/company-dashboard.component';
import { CreateAdComponent } from './company/pages/create-ad/create-ad.component';

const routes: Routes = [
  { path: 'register_client', component: SignupClientComponent},
  { path: 'register_company', component: SignupCompanyComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: SingupComponent},
  { path: 'client/dashboard', component: ClientDashboardComponent },
  // { path: 'company/dashboard', component: CompanyDashboardComponent },
  // { path: 'company/ad', component: CreateAdComponent },
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
