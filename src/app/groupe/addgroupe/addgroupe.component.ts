import { GroupeService } from './../../services/groupe.service';
import { Groupe } from './../../entities/groupe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addgroupe',
  templateUrl: './addgroupe.component.html',
  styleUrls: ['./addgroupe.component.css']
})
export class AddgroupeComponent implements OnInit {
  gr :Groupe =  new Groupe();

  
 
  constructor(private grService:GroupeService,private router:Router,private route:ActivatedRoute) { }


  ngOnInit() {
    
      
  }
  savegroupe(){
    this.grService.createGroupe(this.gr).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['listgroupe']) ;
       
      }
    ),
    error=>console.log(error);
    
  }

  onSubmit(){
    console.log(this.gr);
    this.savegroupe();
   
 
 }



}
