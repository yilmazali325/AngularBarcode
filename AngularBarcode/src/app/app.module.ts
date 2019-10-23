import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { DataService } from './services/data.service';
import { AuthguardService } from './services/authguard.service'
import { CheckoutComponent } from './checkout/checkout.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CheckedoutitemComponent } from './checkedoutitem/checkedoutitem.component';
import { LoginComponent } from './login/login.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { UseraddComponent } from './useradd/useradd.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { UserdeleteComponent } from './userdelete/userdelete.component';
import { UserlistComponent } from './userlist/userlist.component';
import { BusinessaccountlistComponent } from './businessaccountlist/businessaccountlist.component';
import { BusinessaccountaddComponent } from './businessaccountadd/businessaccountadd.component';
import { BusinessaccounteditComponent } from './businessaccountedit/businessaccountedit.component';
import { BusinessaccountdisableComponent } from './businessaccountdisable/businessaccountdisable.component';
import { CheckedoutitembybusinessComponent } from './checkedoutitembybusiness/checkedoutitembybusiness.component';
import { ExportAsModule } from 'ngx-export-as';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSortModule
} from '@angular/material';
const appRoutes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'product', component: ProductComponent, canActivate: [AuthguardService] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthguardService] },
  { path: 'addproduct', component: AddproductComponent, canActivate: [AuthguardService] },
  { path: 'checkedout', component: CheckedoutitemComponent, canActivate: [AuthguardService] },
  { path: 'updateproduct', component: UpdateproductComponent, canActivate: [AuthguardService] },
  { path: 'deleteproduct', component: DeleteproductComponent, canActivate: [AuthguardService] },
  { path: 'adduser', component: UseraddComponent, canActivate: [AuthguardService] },
  { path: 'updateuser', component: UserupdateComponent, canActivate: [AuthguardService] },
  { path: 'deleteuser', component: UserdeleteComponent, canActivate: [AuthguardService] },
  { path: 'userlist', component: UserlistComponent, canActivate: [AuthguardService] },
  { path: 'businessaccountlist', component: BusinessaccountlistComponent, canActivate: [AuthguardService] },
  { path: 'businessaccountadd', component: BusinessaccountaddComponent, canActivate: [AuthguardService] },
  { path: 'businessaccountupdate', component: BusinessaccounteditComponent, canActivate: [AuthguardService] },
  { path: 'businessaccountdisable', component: BusinessaccountdisableComponent, canActivate: [AuthguardService] },
  { path: 'checkedoutbybusiness', component: CheckedoutitembybusinessComponent, canActivate: [AuthguardService] },



];
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CheckoutComponent,
    AddproductComponent,
    CheckedoutitemComponent,
    LoginComponent,
    UpdateproductComponent,
    DeleteproductComponent,
    UseraddComponent,
    UserupdateComponent,
    UserdeleteComponent,
    UserlistComponent,
    BusinessaccountlistComponent,
    BusinessaccountaddComponent,
    BusinessaccounteditComponent,
    BusinessaccountdisableComponent,
    CheckedoutitembybusinessComponent
    ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(
      appRoutes
  ),
     BrowserAnimationsModule,
     MatTableModule,
     HttpClientModule,
     FormsModule,
     ExportAsModule,
     MatDatepickerModule,
     ReactiveFormsModule,
     MatButtonModule,
     MatFormFieldModule,
     MatInputModule,
     MatRippleModule,
     MatNativeDateModule,
     MatSortModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
