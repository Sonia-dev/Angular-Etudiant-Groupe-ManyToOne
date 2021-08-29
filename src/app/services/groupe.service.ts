
import { Groupe } from './../entities/groupe';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  private baseUrl = 'http://localhost:8080/api/groupe/';
  constructor(private http: HttpClient) { }



    
  createGroupe(groupes): Observable<Groupe> {  
    let s= this.http.post<Groupe>(`${this.baseUrl}`+'new',groupes); 
    console.log(s);
    return s;
  }  
  getgroupList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'groupes');  
  }    

  deletegroup(id:number):Observable<void>{
    return this.http.delete<void>(this.baseUrl+"/groupe/"+id)
  
  }
  update(id:number,groupe:Groupe):Observable<void>{
    return this.http.put<void>("http://localhost:8080/api/groupe/groupe/update/"+id,groupe);
  }
  



  
getGroupeById(id:number):Observable<Groupe>{
  return this.http.get<Groupe>("http://localhost:8080/api/groupe/groupe/"+id)
    
} 



}
