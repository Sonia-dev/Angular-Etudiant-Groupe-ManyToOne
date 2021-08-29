import { ToastrService } from 'ngx-toastr';
import { EtudiantService } from './../../services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Groupe } from 'src/app/entities/groupe';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-listgroupe',
  templateUrl: './listgroupe.component.html',
  styleUrls: ['./listgroupe.component.css']
})
export class ListgroupeComponent implements OnInit {

  groupes:Groupe[];
  
  id_dep:number;
  
  constructor(private groupeserv:GroupeService,private toast:ToastrService, private router:Router) { }
  
  ngOnInit() {
    this.getgroupes();
   
    
  }
  private getgroupes(){
    this.groupeserv.getgroupList().subscribe(data => {
      this.groupes = data;
      console.log(data);});
      
   }

   supprimer(id:number){

    let c = confirm("voulez vous vraiment supprimer ce groupe?")
   
    if(c==true)
    {
    this.groupeserv.deletegroup(id).subscribe(
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
        this.router.navigate(['updateegr',id]) ;
      }


  


   
  }

   

