import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./services/auth-guard";
import {PodDetailsComponent} from "./components/pod-details/pod-details.component";
import {CourseDetailsComponent} from "./components/course-details/course-details.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pod', component: PodDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'course', component: CourseDetailsComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
