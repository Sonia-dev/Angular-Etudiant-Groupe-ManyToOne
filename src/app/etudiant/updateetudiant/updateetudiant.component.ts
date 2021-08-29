import { EtudiantService } from './../../services/etudiant.service';
import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/entities/etudiant';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from 'src/app/entities/groupe';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-updateetudiant',
  templateUrl: './updateetudiant.component.html',
  styleUrls: ['./updateetudiant.component.css']
})
export class UpdateetudiantComponent implements OnInit {
  etudiant:Etudiant;
  public userfile:any;
  groupe:Groupe;
  grps:Groupe;
  id:number;
  pp:any;
  constructor(private etudiantserv:EtudiantService,private groupeserv:GroupeService,private router:Router, public route:ActivatedRoute) { }

  ngOnInit() {



    this.groupeserv.getgroupList().subscribe(data=>{
      this.grps=data;
      console.log(this.grps);
    })




    this.id=this.route.snapshot.params.id;
     this.etudiantserv.getEtudiantById(this.id).subscribe(data=>{
     this.etudiant=data;
    console.log(this.etudiant ,"***********")
     },error=>console.log(error));}
   
  
 
 update() { 
this.pp=(this.etudiant,this.userfile);
console.log(this.pp); 
     console.log(this.etudiant);
    
     
   
      this.etudiantserv.updateEtudiant(this.id,this.etudiant,this.userfile).subscribe( data=>
       {
        console.log(data)
   
     
     }); 
     }
     onSelectFile(event:any){
    
      console.log(event.target.value);
      this.userfile=event.target.value;
    }
 
 
  
 }
 
 