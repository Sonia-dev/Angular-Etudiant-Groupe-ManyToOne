import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddetudiantComponent } from './etudiant/addetudiant/addetudiant.component';
import { UpdateetudiantComponent } from './etudiant/updateetudiant/updateetudiant.component';
import { AddgroupeComponent } from './groupe/addgroupe/addgroupe.component';
import { UpdategroupeComponent } from './groupe/updategroupe/updategroupe.component';
import {HttpClientModule} from'@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { ListEtudiantComponent } from './etudiant/list-etudiant/list-etudiant.component';
import { ShowEtudiantComponent } from './etudiant/show-etudiant/show-etudiant.component';
import { ListgroupeComponent } from './groupe/listgroupe/listgroupe.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ShowgroupeComponent } from './groupe/showgroupe/showgroupe.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    AddetudiantComponent,
    UpdateetudiantComponent,
    AddgroupeComponent,
    UpdategroupeComponent,
    ListEtudiantComponent,
    ShowEtudiantComponent,
    ListgroupeComponent,
    AcceuilComponent,
    ShowgroupeComponent,
    HomeComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   ReactiveFormsModule,
   BrowserAnimationsModule,
   ToastrModule.forRoot(
   )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
