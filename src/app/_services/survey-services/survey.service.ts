import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse,HttpHeaders}  from '@angular/common/http'
import {Observable,BehaviorSubject} from "rxjs"
import { environment } from '../../../environments/environment';
import {surveyModel} from '../../_models/surveyModel'

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  emptySurvey:surveyModel={
    surveyId: 1,
    surveyName: "",
    isPublished: "",
    qsStatus: "",
    fromDate: new Date,
    toDate: new Date,
    fromTime: "",
    toTime: "",
    pocEntity: {
        pocName: "",
        mail: "",
        status: "",
        accesskey: "",
        companyEntity: {
            companyId: 1,
            companyName: "",
            logo: "",
        }
    },
    DimensionEntity: {
        dimension_id: 1,
        dimensionName: "",
        status: ""
    }, WelcomeMsgEntity: {
      welcomeMessage : "",
      welcomeLogo:""
      }
  
  };

  surveyData = new BehaviorSubject<surveyModel>(this.emptySurvey);
 
    CreateSurvey(survey:surveyModel)
    {
      this.surveyData.next(survey);      
    }   

    GetCurrentSurvey()
    {
      return this.surveyData.asObservable();
    }

    

    
  constructor(private http:HttpClient) { }

  headers={
    headers:new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

  retrieveAllSurvey() : Observable<any> {  
    console.log("Execute retrieveAllSurvey Services ");
    return this.http.get(`${environment.apiUrl}/company/comapnyList/`);
  }
  
  saveSurvey(surveyName: string, pocName: string ): Observable<any> {
    console.log("surveyName : "+surveyName+" pocName : "+pocName);
    return this.http.post<any>(`${environment.apiUrl}/survey/addSurvey/`, { surveyName, pocName},this.headers);
  }

}
