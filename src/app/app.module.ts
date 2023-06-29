import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NsvbarComponent } from './nsvbar/nsvbar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StorepropertyComponent } from './storeproperty/storeproperty.component';
import { RemovedpropertyComponent } from './removedproperty/removedproperty.component';
import { PropertytransferComponent } from './propertytransfer/propertytransfer.component';
import { PropertyremoveComponent } from './propertyremove/propertyremove.component';
import { IndividualComponent } from './individual/individual.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { AngularComponent } from './angular/angular.component';
import { CompanyComponent } from './company/company.component';
import { CourcesComponent } from './cources/cources.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';

import { GraphComponent } from './graph/graph.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    NsvbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    StorepropertyComponent,
    RemovedpropertyComponent,
    PropertytransferComponent,
    PropertyremoveComponent,
    IndividualComponent,
    
    ComponentNameComponent,
    AngularComponent,
    CompanyComponent,
    CourcesComponent,
    SearchComponent,
    FilterComponent,
 
    GraphComponent,
      PieChartComponent,
      

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
