import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NewUserComponent } from './new-user/new-user.component';
import { OrderMenuBarComponent } from './order-menu-bar/order-menu-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { OtpBpttomsheetComponent } from './otp-bpttomsheet/otp-bpttomsheet.component';
import { OtpDialogComponent } from './otp-dialog/otp-dialog.component';
import { MainCheckoutComponent } from './main-checkout/main-checkout.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CancelComponent } from './cancel/cancel.component';
import { ReturningUserComponent } from './returning-user/returning-user.component';
import { ContactInfoBottomsheetComponent } from './contact-info-bottomsheet/contact-info-bottomsheet.component';
import { ShippingInfoBottomsheetComponent } from './shipping-info-bottomsheet/shipping-info-bottomsheet.component';
import { DeliveryTypeBottomsheetComponent } from './delivery-type-bottomsheet/delivery-type-bottomsheet.component';
import { PaymentMethodBottomsheetComponent } from './payment-method-bottomsheet/payment-method-bottomsheet.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { UserCheckComponent } from './user-check/user-check.component';
import { MenuBottomsheetComponent } from './menu-bottomsheet/menu-bottomsheet.component';
import { MatMenuModule} from '@angular/material/menu';
import { SignInReturningComponent } from './sign-in-returning/sign-in-returning.component';
import { OtpReturningComponent } from './otp-returning/otp-returning.component';
import { MainCheckoutReturningComponent } from './main-checkout-returning/main-checkout-returning.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ReturingMenuBarComponent } from './returing-menu-bar/returing-menu-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    OrderMenuBarComponent,
    SignInComponent,
    OtpBpttomsheetComponent,
    OtpDialogComponent,
    MainCheckoutComponent,
    OrderDetailComponent,
    CancelComponent,
    ReturningUserComponent,
    ContactInfoBottomsheetComponent,
    ShippingInfoBottomsheetComponent,
    DeliveryTypeBottomsheetComponent,
    PaymentMethodBottomsheetComponent,
    OrderPlacedComponent,
    UserCheckComponent,
    MenuBottomsheetComponent,
    SignInReturningComponent,
    OtpReturningComponent,
    MainCheckoutReturningComponent,
    ReturingMenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTabsModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
