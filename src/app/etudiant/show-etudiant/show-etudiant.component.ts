import { EtudiantService } from './../../services/etudiant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/entities/etudiant';

@Component({
  selector: 'app-show-etudiant',
  templateUrl: './show-etudiant.component.html',
  styleUrls: ['./show-etudiant.component.css']
})
export class ShowEtudiantComponent implements OnInit {
  id:number;
  etudiant:Etudiant;
  constructor(private activedroute:ActivatedRoute ,private router:Router, private etudiantServ:EtudiantService) { }

  ngOnInit() {
    //conversion de chaine de caractére en entier 
    this.id=+ this.activedroute.snapshot.paramMap.get('id'); 
    //this.produit=this.products.find(elt=>elt.id==this.id);
    this.etudiantServ.getEtudiantById(this.id).subscribe(data=>{
      this.etudiant=data;
      console.log(this.etudiant ,"***********")
    },error=>console.log(error));}
    
  back(){
    this.router.navigate(['/listetudiant']); }
    


  
      



}
