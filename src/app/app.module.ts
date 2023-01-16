import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { DataComponent } from './admin/data/data.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {TokenInterceptor} from './interceptors/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

console.log('root module loaded...');

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    AdminComponent,
    UsersComponent,
    DataComponent,
    BlogListComponent,
    BlogDetailComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
		ReactiveFormsModule,
		HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true
		}
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
