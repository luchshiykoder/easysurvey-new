import { API_URL } from '../../app.constant';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userModel  } from '../../_models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
  
  retrieveAllUser() : Observable<any> {  
    console.log("Execute retrieveAllUser User Service");
    return this.http.get(`${API_URL}/users/get/`);
     
  }

  deleteUserById(username, id){
    return this.http.delete(`${API_URL}/users/${username}/AddUserComponents/${id}`);
  }

  retrieveUserById(username, id){
    return this.http.get<any>(`${API_URL}/users/AddUserComponents/${id}`);
  }

  updateUser(username, id, AddUserComponent){
    return this.http.put(`${API_URL}/users/${username}/AddUserComponents/${id}`, AddUserComponent);
  }

  createUser(userModel: any): Observable<any> {
    console.log("Execute User Service")
    return this.http.post<userModel>(`${API_URL}/users/addUser/`,userModel,this.headers);
  }


}
