import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GroupeService } from '../../services/groupe.service';
import { Groupe } from '../../entities/groupe';

@Component({
  selector: 'app-showgroupe',
  templateUrl: './showgroupe.component.html',
  styleUrls: ['./showgroupe.component.css']
})
export class ShowgroupeComponent implements OnInit {
  id:number;
  groupe:Groupe;
  constructor(private activedroute:ActivatedRoute ,private router:Router, private groupeServ:GroupeService) { }

  ngOnInit() {
    //conversion de chaine de caractére en entier 
    this.id=+ this.activedroute.snapshot.paramMap.get('id'); 
    //this.produit=this.products.find(elt=>elt.id==this.id);
    this.groupeServ.getGroupeById(this.id).subscribe(data=>{
      this.groupe=data;
      console.log(this.groupe ,"***********")
    },error=>console.log(error));}
    
  back(){
    this.router.navigate(['/listgroupe']); }
    


  
      



}
