import { ShowgroupeComponent } from './groupe/showgroupe/showgroupe.component';
import { ListgroupeComponent } from './groupe/listgroupe/listgroupe.component';
import { ShowEtudiantComponent } from './etudiant/show-etudiant/show-etudiant.component';
import { ListEtudiantComponent } from './etudiant/list-etudiant/list-etudiant.component';
import { UpdategroupeComponent } from './groupe/updategroupe/updategroupe.component';
import { AddgroupeComponent } from './groupe/addgroupe/addgroupe.component';
import { UpdateetudiantComponent } from './etudiant/updateetudiant/updateetudiant.component';
import { AddetudiantComponent } from './etudiant/addetudiant/addetudiant.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:AcceuilComponent,children:[

  {path:"addetudiant",component:AddetudiantComponent},
  {path:"listetudiant",component:ListEtudiantComponent},
  {path:"updateetudiant/:id",component:UpdateetudiantComponent},
  {path:"updateegr/:id",component:UpdategroupeComponent},
  {path:"addgroupe",component:AddgroupeComponent},
  {path:"listgroupe",component:ListgroupeComponent},
  {path:"updategroupe",component:UpdategroupeComponent},
  {path:"listetudiant/:id",component:ShowEtudiantComponent},
  {path:"listgroupe/:id",component:ShowgroupeComponent},
  {path:"home",component:HomeComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
