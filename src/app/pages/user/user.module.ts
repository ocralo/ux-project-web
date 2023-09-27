import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSingupComponent } from './user-singup/user-singup.component';
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: [UserLoginComponent,UserSingupComponent],
  exports: [UserLoginComponent,UserSingupComponent,MatCardModule,MatInputModule,MatButtonModule]
})
export class UserModule { }
