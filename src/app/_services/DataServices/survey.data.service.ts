import {Injectable} from "@angular/core"
import {Observable,BehaviorSubject} from "rxjs"
import {ISurvey} from "../../Interfaces/ISurvey"
@Injectable()
export class SurveyDataService
{
    emptySurvey:ISurvey={
        SurveryName:"",
        Respodant :{Name:"",Email:"",DOB:""},
      //  welcomeMsg:""
    }
    currentSurvey = new BehaviorSubject<ISurvey>(this.emptySurvey);
    // WelcomeMsg = new BehaviorSubject<ISurvey>(this.emptySurvey);
    CreateSurvey(survey:ISurvey)
    {
        this.currentSurvey.next(survey);
    }

    // WelcomeMsg(survey:ISurvey)
    // {
        
    // }

    GetCurrentSurvey()
    {
       return this.currentSurvey.asObservable();
    }
}