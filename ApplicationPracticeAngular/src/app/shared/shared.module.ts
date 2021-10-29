import { NgModule } from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
// import { LoginPageForAllUsersComponent } from './components/login-page-for-all-users/login-page-for-all-users.component';
import {RouterModule} from '@angular/router';

// children: [
//   {path: '', redirectTo: '/login', pathMatch: 'full'},
//   {path: 'login', component: LoginPageComponent},
//   {path: 'dashboard', component: DashboardPageComponent},
//   {path: 'create', component: CreatePageComponent},
//   {path: 'post/:id/edit', component: EditPageComponent}
// ]

@NgModule({
    imports: [HttpClientModule],
    exports: [HttpClientModule],
    declarations: [
      // LoginPageForAllUsersComponent
    ],
})

export class SharedModule{

}