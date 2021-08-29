import { ActivatedRoute, Router } from '@angular/router';
import { GroupeService } from 'src/app/services/groupe.service';
import { Groupe } from 'src/app/entities/groupe';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updategroupe',
  templateUrl: './updategroupe.component.html',
  styleUrls: ['./updategroupe.component.css']
})
export class UpdategroupeComponent implements OnInit {

  groupe:Groupe;


  id:number;
  constructor(private groupeserv:GroupeService,private router:Router, public route:ActivatedRoute) { }

  ngOnInit() {
    this.groupeserv.getgroupList().subscribe(data=>{
      this.groupe=data;
      
    })
    this.id=this.route.snapshot.params.id;
     this.groupeserv.getGroupeById(this.id).subscribe(data=>{
     this.groupe=data;
   
     },error=>console.log(error));}
   
  
 
     onsubmit() { 
     
      this.groupeserv.update(this.id,this.groupe).subscribe(data=>{ console.log(data); 
        this.router.navigate(['listgroupe']);
     
     }); 
     }
 
 
  
 }
 
 