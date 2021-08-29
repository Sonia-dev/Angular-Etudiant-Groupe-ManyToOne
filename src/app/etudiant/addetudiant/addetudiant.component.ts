import { ToastrService } from 'ngx-toastr';
import { GroupeService } from './../../services/groupe.service';
import { EtudiantService } from './../../services/etudiant.service';
import { Groupe } from './../../entities/groupe';
import { Etudiant } from './../../entities/etudiant';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addetudiant',
  templateUrl: './addetudiant.component.html',
  styleUrls: ['./addetudiant.component.css']
})
export class AddetudiantComponent implements OnInit {

  etudiantForm: FormGroup;

  order  :Etudiant =  new Etudiant();
  employees:any;
  public userfile:any;
  submitted = false; 
 empselected:number;
 groupe:Groupe;
 groupes:Groupe;
  id:number;
  f:NgForm;
  constructor( private etudiantserv:EtudiantService,private toast:ToastrService,private fb:FormBuilder, private router:Router,private groupeserv:GroupeService) { }

  ngOnInit() {
    this.groupeserv.getgroupList().subscribe(data=>{
      this.groupe=data;
      console.log(this.groupe);
    })
     

    this. etudiantForm =this.fb.group({
      nom:['',[Validators.required,Validators.minLength(4)]],
      prenom:['',[Validators.required]],
      date_naissance:['',[Validators.required]],
     groupe:[0,[Validators.required]],
      matricule:['',[Validators.required]],

      });
     


    
  }

       successmessage(){
        this.toast.success('ajouté avec succes !','Success',{
          timeOut: 10000,
 
        });
       }

  onSubmit(){

   
    this.etudiantserv.createemployee(this.etudiantForm.value,this.userfile).subscribe(data=>{

      console.log(data)
      console.log(this.etudiantForm.value)
      console.log(this.userfile)
      
    } ); 
    //window.location.reload();
    this.successmessage();
    this.router.navigate(['listetudiant']) ;
   
     
     
  }

  onSelectFile(event:any){
    
    console.log(event.target.value);
    this.userfile=event.target.value;
  }
}
