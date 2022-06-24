import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { LoginUserComponent } from "./login-user/login-user.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./service/auth.guard";

export const routes:Routes = [
    {path:'',component:LoginUserComponent},
    {path:'register',component:RegisterUserComponent},
    {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
    {path:'**',component:LoginUserComponent}
]

@NgModule({
    imports: [CommonModule,RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule{}