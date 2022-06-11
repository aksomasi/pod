import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {ConfirmationService} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";
import {LoginComponent} from "../components/login/login.component";
import {MatDialog} from "@angular/material/dialog";
import {ErrorMessageComponent} from "../components/error-message/error-message.component";

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor(public dialog: MatDialog) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // @ts-ignore
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            console.log('This is client side error');
            errorMsg = `Error: ${error.error.message}`;
          } else {
            console.log('This is server side error');
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
          }
          const dialogRef = this.dialog.open(ErrorMessageComponent, {
            width: '550px',
            data: {error: errorMsg},
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
          });
          console.log(errorMsg);
          return throwError(errorMsg);
        })
      )
  }
}
