import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SelectButtonModule} from "primeng/selectbutton";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FieldsetModule} from "primeng/fieldset";
import {ButtonModule} from "primeng/button";
import {CardModule} from 'primeng/card';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {ErrorCatchingInterceptor} from "./services/error-catching-interceptor";
import {ConfirmationService} from "primeng/api";
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {MatDialogModule} from '@angular/material/dialog';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {AuthGuard} from "./services/auth-guard";
import { PodDetailsComponent } from './components/pod-details/pod-details.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidenavComponent,
    HeaderComponent,
    ErrorMessageComponent,
    PodDetailsComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    CardModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FieldsetModule,
    ButtonModule,
    AppRoutingModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorCatchingInterceptor,
      multi: true
    },
    ConfirmationService,
    DialogService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
