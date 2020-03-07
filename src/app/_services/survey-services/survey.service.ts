import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse,HttpHeaders}  from '@angular/common/http'
import {Observable} from 'rxjs'
import {API_URL} from '../../app.constant'
import {} from '../../_models'

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  constructor(private http:HttpClient) { }

  headers={
    headers:new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

  retrieveAllSurvey() : Observable<any> {  
    console.log("Execute retrieveAllSurvey Services ");
    return this.http.get(`${API_URL}/company/comapnyList/`);
  }


  deleteSurveyById(username, id){
    return this.http.delete(`${API_URL}/company/${username}/company/${id}`);
  }

  updateSurvey(username, id, AddUserComponent){
    return this.http.put(`${API_URL}/company/${username}/company/${id}`, AddUserComponent);
  }

  createSurvey(company: any): Observable<any> {
    console.log("Execute User Service")
    return this.http.post<any>(`${API_URL}/survey/addSurvey/`,company,this.headers);
  }

}
