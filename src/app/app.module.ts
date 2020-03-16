import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module';
import { GridListComponent } from './grid-list/grid-list.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { LessonModalComponent } from './lesson-modal/lesson-modal.component';
//import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AddDemographicComponent } from './add-demographic/add-demographic.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { fakeBackendProvider } from './_helpers';
import {SurveyDataService} from "./_services/DataServices/survey.data.service";
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatSort} from '@angular/material/sort';
//import {MatTableDataSource} from '@angular/material/table';
import { ExcelService } from './_services/excel.service';
import {MatDatepickerModule, MatInputModule,MatNativeDateModule} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    GridListComponent,
    StepperComponent,
    TabsComponent,
    TableComponent,
    FormComponent,
    SideBarComponent,
    HeaderBarComponent,
    LoginComponent,
    BarChartsComponent,
    EditTemplateComponent,
    AddQuestionsComponent,
    LessonModalComponent,
    AddDemographicComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule, 
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatTabsModule,
    NgbModule,DragDropModule,

    ChartsModule,MatFormFieldModule,
    MatDialogModule,
    HttpClientModule, AngularEditorModule, MatChipsModule, MatTableModule, MatDatepickerModule, MatInputModule,MatNativeDateModule,
    AngularFontAwesomeModule,FontAwesomeModule//MatPaginator,// MatSort,//MatTableDataSource// FlexLayoutModule,
   
  ],
  entryComponents:[LessonModalComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,SurveyDataService, ExcelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
