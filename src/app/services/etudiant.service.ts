import { Etudiant } from './../entities/etudiant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl = 'http://localhost:8080/api/v1/';
  constructor(private http: HttpClient) { }


  createemployee(etudiant:any,id:number):Observable<any>{
    return this.http.post("http://localhost:8080/api/v1/add/"+id,etudiant);  
  }



  
getEtudiantById(id:number):Observable<Etudiant>{
  return this.http.get<Etudiant>("http://localhost:8080/api/v1/etudiant/"+id)
    
} 

deleteEtudiant(id:number):Observable<void>{
  return this.http.delete<void>(this.baseUrl+"/etudiant/"+id)

}

updateEtudiant(id:number,etudiant:Etudiant,idd:number):Observable<void>{
  return this.http.put<void>(`http://localhost:8080/api/v1/etudiants/${id}/${idd}`,etudiant);
}



 
  getetudiantList(): Observable<any> {  
    return this.http.get("http://localhost:8080/api/v1/etudiants");  
  }  




  
}
