import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';


import { MatIconModule } from '@angular/material/icon';
 import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
// import {MatCardModule} from '@angular/material/card';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';

//import { AppointmentConformationComponent } from '/appointment-conformation/appointment-conformation.component';
import { DatePipe } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';


import { AddprescriptionComponent } from './view-details/addprescription/addprescription.component';
import { CloseappointmentDialogComponent } from './view-details/closeappointment-dialog/closeappointment-dialog.component';
import { EditprescriptionComponent } from './view-details/editprescription/editprescription.component';
import { PrescriptioncardComponent } from './view-details/prescriptioncard/prescriptioncard.component';
import { TestcardComponent } from './view-details/testcard/testcard.component';
import { VetcardComponent } from './view-details/vetcard/vetcard.component';
import { VitalcardComponent } from './view-details/vitalcard/vitalcard.component';
import { AuthenticationService } from './Services/authentication.service';
import { PetparentProfileComponent } from './petparent-profile/petparent-profile.component';
import { VetProfileComponent } from './vet-profile/vet-profile.component';
import { RecepProfileComponent } from './recep-profile/recep-profile.component';

import { RecepDialogComponent } from './recep-profile/recep-dialog/recep-dialog.component';
import { ViewAppDetailsComponent } from './view-app-details/view-app-details.component';
import { filter } from 'rxjs';
import { FilterPipe } from './CustomPipes/filter.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FilterPipe2 } from './CustomPipes/fiter2.pipe';
import { VetdialogComponent } from './vet-profile/vet-dialog/vet-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MsalAngularConfiguration, MsalInterceptor, MSAL_CONFIG, MSAL_CONFIG_ANGULAR, MsalService, MsalModule } from '@azure/msal-angular';
import { Configuration } from 'msal';
import { msalConfig, msalAngularConfig } from './app-config';
import { LandingScreenModule } from './landing-screen/landing-screen.module';
import { SymptomDTO } from './Models/SymptomDTO.model';
import { TestDTO } from './Models/TestDTO.model';



function MSALConfigFactory(): Configuration {
  return msalConfig;
}

function MSALAngularConfigFactory(): MsalAngularConfiguration {
  return msalAngularConfig;
}


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe2,
    LoginComponent,
    SignupComponent,
    AddprescriptionComponent,
    CloseappointmentDialogComponent,
    EditprescriptionComponent,
    PrescriptioncardComponent,
    TestcardComponent,
    VetcardComponent,
    VitalcardComponent,
    SidenavComponent,
    HeaderComponent,
    PetparentProfileComponent,
    VetProfileComponent,
    VetdialogComponent,
    ViewAppDetailsComponent,
  ],
  imports: [
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatProgressSpinnerModule,
    BrowserModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MsalModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatStepperModule,
    MatGridListModule,
    LandingScreenModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthenticationService, DatePipe, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_CONFIG,
      useFactory: MSALConfigFactory
    },
    {
      provide: MSAL_CONFIG_ANGULAR,
      useFactory: MSALAngularConfigFactory
    },
    MsalService,SymptomDTO,TestDTO
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
