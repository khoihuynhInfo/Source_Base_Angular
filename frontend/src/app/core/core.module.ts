import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RightsidebarComponent } from './components/rightsidebar/rightsidebar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DataService } from './services/http-service.service';
import { ErrorInterceptor } from './interceptors/error.service';
import { JwtInterceptor } from './interceptors/jwt.service';
import { LoaderInterceptorService } from './interceptors/loader.service';
import { SuccessInterceptor } from './interceptors/success.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RightsidebarComponent,
    BreadcrumbComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    HeaderComponent,
    FooterComponent,
    RightsidebarComponent,
    BreadcrumbComponent,
    LoaderComponent
  ],
  providers: [
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SuccessInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
  ]
})
export class CoreModule { }
