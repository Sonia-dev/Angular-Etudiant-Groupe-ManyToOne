import { ToastrModule, ToastrService } from 'ngx-toastr';
import { GroupeService } from './../../services/groupe.service';
import { EtudiantService } from './../../services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/entities/etudiant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {

  etudiants:Etudiant[];
  
  id_dep:number;
  
  constructor(private etudiantserv:EtudiantService ,private toast:ToastrService, private Groupesev:GroupeService, private router:Router) { }
  
  ngOnInit() {
    this.getEtudiants();
    
  }
  private getEtudiants(){
    this.etudiantserv.getetudiantList().subscribe(data => {
      this.etudiants = data;
      console.log(data);});
      
   }


   supprimer(id:number){

    let c = confirm("voulez vous vraiment supprimer cet etudiant?")
   
    if(c==true)
    {
    this.etudiantserv.deleteEtudiant(id).subscribe(
      data=>{
        console.log(data);
        
        
      }
     
    )
    this.toast.success('Supprimé avec succes !','Success',{
      timeOut:5000,
      progressBar:false
    });
    }
   
  
    window.location.reload();
  
  
   
      }


      
  private modifier(id:number){
    this.router.navigate(['updateetudiant',id]) ;
  }


   
  }

   

