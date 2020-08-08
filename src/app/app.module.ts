import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule} from '../app/ngmaterial/ngmaterial.module';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { ButtonComponent } from './button/button.component';
import { FormsComponent } from './forms/forms.component';
import { EmployeeComponent } from './forms/employee/employee.component';

import { ServiceService} from './service.service';
import { DepartmentService} from './department.service';
import { environment} from '../environments/environment';

import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { EmployeeListComponent } from './forms/employee-list/employee-list.component';
import {FormsModule} from '@angular/forms';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RouterModule, Router, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { FruitComponent } from './fruit/fruit.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { RegisteruserComponent } from './admin/registeruser/registeruser.component';
import { UserorderComponent } from './admin/userorder/userorder.component';
import { OrangeComponent } from './fruit/orange/orange.component';
import { UserformComponent } from './userform/userform.component';
import { CustchildComponent } from './custchild/custchild.component';
import { CustTitlePipe} from './cust.pipe';
import { ThankComponent } from './thank/thank.component';
import { CartComponent } from './cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateformComponent } from './updateform/updateform.component';
import { StrawberryComponent } from './fruit/strawberry/strawberry.component';
import { KiwiComponent } from './fruit/kiwi/kiwi.component';
import { GreenpeasComponent } from './vegetable/greenpeas/greenpeas.component';
import { OnionComponent } from './vegetable/onion/onion.component';
import { CapsicumComponent } from './vegetable/capsicum/capsicum.component';



const appRoutes:Routes=[
  { path: 'app-login-form',component: LoginFormComponent},
  { path: 'app-register', component: RegisterFormComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-admin', component: AdminComponent },
  { path: 'app-registeruser', component: RegisteruserComponent },
  { path: 'app-userorder', component: UserorderComponent },
  { path: 'app-userform', component: UserformComponent },
  { path: 'app-fruit', component: FruitComponent },
  { path: 'app-orange', component: OrangeComponent },
  { path: 'app-strawberry', component: StrawberryComponent},
  { path: 'app-kiwi', component: KiwiComponent },
  { path: 'app-thank', component: ThankComponent },
  { path: 'app-cart', component: CartComponent },
  { path: 'app-vegetable', component: VegetableComponent },
  { path: 'app-capsicum', component: CapsicumComponent},
  { path: 'app-onion', component: OnionComponent },
  { path: 'app-greenpeas', component: GreenpeasComponent },
  { path: '', redirectTo:'/app-login-form',pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    RadioComponent,
    ButtonComponent,
    FormsComponent,
    EmployeeComponent,
    EmployeeListComponent,
    MatConfirmDialogComponent,
    RegisterFormComponent,
    LoginFormComponent,
    HomeComponent,
    AdminComponent,
    FruitComponent,
    VegetableComponent,
    RegisteruserComponent,
    UserorderComponent,
    OrangeComponent,
    UserformComponent,
    CustchildComponent,
    CustTitlePipe,
    ThankComponent,
    CartComponent,
    UpdateformComponent,
    StrawberryComponent,
    KiwiComponent,
    GreenpeasComponent,
    OnionComponent,
    CapsicumComponent,
 
  ],
  imports: [
    BrowserModule, DemoMaterialModule, BrowserAnimationsModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireDatabaseModule, FormsModule,
    RouterModule.forRoot(appRoutes), HttpClientModule

  ],
  providers: [ServiceService, DepartmentService],
  bootstrap: [AppComponent],
  entryComponents: [EmployeeComponent, MatConfirmDialogComponent, UserformComponent, UpdateformComponent]
})

export class AppModule { }

