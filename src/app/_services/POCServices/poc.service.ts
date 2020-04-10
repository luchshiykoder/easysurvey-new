import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse,HttpHeaders}  from '@angular/common/http'
import {Observable,BehaviorSubject} from "rxjs"
import {API_URL} from '../../app.constant'
import {pocModel} from '../../_models/pocModel'

@Injectable({
  providedIn: 'root'
})
export class PocService {

  constructor(private http:HttpClient) { }

  emptySurvey:pocModel={ 
        pocName: "",
        mail: "",
        status: "",
        accesskey: "",
        companyEntity: {
            companyId: 1,
            companyName: "",
            logo: "",
        }
    };  
  
  pocData = new BehaviorSubject<pocModel>(this.emptySurvey);
 
    AddPoc(poc:pocModel)
    {
      this.pocData.next(poc);      
    }   

    GetPoc()
    {
      return this.pocData.asObservable();
    }

  headers={
    headers:new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }
  retrieveAllPoc() : Observable<any> {  
    console.log("Execute retrieveAllPoc Services ");
    return this.http.get(`${API_URL}/poc/pocList/`);
  }


  deletePocById(username, id){
    return this.http.delete(`${API_URL}/poc/${username}/poc/${id}`);
  }

  updatePoc(username, id, AddUserComponent){
    return this.http.put(`${API_URL}/poc/${username}/poc/${id}`, AddUserComponent);
  }

  createPoc(poc: any): Observable<any> {
    console.log("Execute User Service")
    return this.http.post<any>(`${API_URL}/poc/addPoc/`,poc,this.headers);
  }

}
