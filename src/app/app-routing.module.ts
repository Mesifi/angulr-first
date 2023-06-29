import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CompanyComponent } from './company/company.component';
import { IndividualComponent } from './individual/individual.component';
import { PropertyremoveComponent } from './propertyremove/propertyremove.component';
import { PropertytransferComponent } from './propertytransfer/propertytransfer.component';
import { RemovedpropertyComponent } from './removedproperty/removedproperty.component';
import { StorepropertyComponent } from './storeproperty/storeproperty.component'; 
import { AngularComponent } from './angular/angular.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { CourcesComponent } from './cources/cources.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'individual',component:IndividualComponent},
  {path:'propertyremove',component:PropertyremoveComponent},
  {path:'propertytransfer',component:PropertytransferComponent},
  {path:'removedproperty',component:RemovedpropertyComponent},
  {path:'storeproperty',component:StorepropertyComponent},
  {path:'media',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'company',component:CompanyComponent},
  {path:'componentname',component:ComponentNameComponent},
  {path:'angular',component:AngularComponent},
  {path:'cources',component:CourcesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }