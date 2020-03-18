import { Component, OnInit, Input} from '@angular/core';
import Swal from 'sweetalert2';
import {ISurvey} from "../Interfaces/ISurvey"
import {SurveyDataService} from "../_services/DataServices/survey.data.service"
import { TabDirective } from 'ngx-bootstrap';
@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {

  constructor(private _surveyDataService:SurveyDataService) { }
  // onFileComplete(data: any) {
  // console.log(data); // We just print out data bubbled up from event emitter.
  //}
  ngOnInit () 
  {   }
  // FOR TYPE SURVEY NAME 
  public show:boolean = false;
  public onGoing:boolean = true;
  public expireSurvey:boolean = true;
  public onGoingSelectSurvey:boolean = true;
  public closeSelectSurvey:boolean = true;
  public createNewSurvey:boolean = true;
  public savedsurvey:boolean = true;
  public buttonName:any = 'Show';
  public text:any;
  public EditSelectSurvey:boolean = true;
  public EditSelectedTemplate:boolean = true;
  public ListOnGoingSurvey:boolean = false;
  public menuToggle:boolean = true;
  public main:boolean = false;
  public informationSurvey:boolean = false;
  public launchSurvey:boolean = true;
   public launchSurveyArea:boolean = true;
  public golaunchButton:boolean =true;
  public compltedSurveyGraph:boolean = true;
  CurrSurvey:ISurvey ={
    SurveryName :"",
    Respodant:{Name:"",Email:"",DOB:""},
   // welcomeMsg:""
  };
  detailcompltedSurveyGraph(){
    this.compltedSurveyGraph=false;
  }
  details(){
    this.compltedSurveyGraph=true;
  }
  //Type new Survey Name 
  onClickTypeSurvey(){
    (async () => {
    const { value: text } = await Swal.fire({
      allowOutsideClick: false,
   
      title: 'Enter Survey Name',
      input: 'text',
      inputPlaceholder: 'Enter New Survey Name'
    })
    
    if (text) {
      this.CurrSurvey.SurveryName = text;
      this._surveyDataService.CreateSurvey(this.CurrSurvey);
      Swal.fire(
        `Survey Name: ${text}`,
        'You have successfully created the survey, now!',
        'success'
      ) 
      this.show = true;
      this.onGoing = true;
      this.expireSurvey =true;
      this.onGoingSelectSurvey = true;
      this.closeSelectSurvey =true;
      this.savedsurvey =true;

      this.createNewSurvey = !this.onGoingSelectSurvey;
      this.text=text;
      this.menuToggle = false;
      this.main = true;

     
     
    }    console.log(text);
  })() // FOR asnc end point of TYPE SURVEY NAME 
  } // FOR TYPE SURVEY NAME 

  // savedSurvey(){  
  //   Swal.fire({
    
  //     icon: 'success',

  //    // title: 'Your Details Saved for this Survey',
  //     showConfirmButton: true,
  //     //'success'.
  //     //launch:false,
  //    // timer: 1500
  //   })
 
  
    
    
    
  // }

 //Type new Survey Name 
 onClickSavedSurvey(){
  (async () => {
  const { value: text } = await Swal.fire({
    allowOutsideClick: false,
 
    title: 'Enter Survey Name',
    input: 'text',
    inputPlaceholder: 'Enter New Survey Name'
  })
  
  if (text) {


    Swal.fire(
      `Survey Name: ${text}`,
      'You have successfully created the survey!',
      'success'
    ) 
    this.show = true;
    this.onGoing = true;
    this.expireSurvey =true;
    this.onGoingSelectSurvey = true;
    this.closeSelectSurvey =true;
    this.createNewSurvey = !this.onGoingSelectSurvey;
    this.text=text;
    this.menuToggle = false;
    this.main = true;
    
   
  }
})() // FOR asnc end point of TYPE SURVEY NAME 
} // FOR TYPE SURVEY NAME 
   



  toggle1() {
     this.show = false;
    this.onGoing = !this.onGoing;
    this.expireSurvey =true;
    this.show = !this.show;
    this.onGoingSelectSurvey = true;
    this.closeSelectSurvey = true;
    this.createNewSurvey = true;
    this.savedsurvey = true;

  }
  toggle2() {
    this.show = true;
    this.onGoing = true;
    this.expireSurvey = !this.expireSurvey;
    this.onGoingSelectSurvey = true;
    this.closeSelectSurvey = true;
    this.createNewSurvey = true;
    this.savedsurvey = true;
  }
 
  toggle3() {
    this.show = true;
    this.onGoing = true;
    this.expireSurvey = true;
    this.onGoingSelectSurvey = true;
    this.closeSelectSurvey = true;
    this.createNewSurvey = true;
    this.savedsurvey =  !this.savedsurvey;
  }
  
  // FOR asnc start point of selected survey name 
  onClickSelectSurvey() {

    // (async () => {
   
    // const { value: survey } = await Swal.fire({
    //   allowOutsideClick: false,
    //   title: 'Select Survey Name',
    //   input: 'select',
    //   inputOptions: {

    //     HCL: 'HCL',
    //     TATAAIG: 'TATAAIG',
    //     CRISIL: 'CRISIL',
    //     ARMEZO: 'ARMEZO'
    //   },
    //   inputPlaceholder: 'Select a survey',
    //   showCancelButton: true,
    //   cancelButtonColor: '#d33',
    //   inputValidator: (value) => {
       
    //     return new Promise((resolve) => {
          
    //       if (value === '') {
    //         resolve('You need to select :)')
            
            
    //       }else{
    //         resolve();
             
    //       } 
          
    //     })
    //   }
    // })
    
    // if (survey) {
    //   Swal.fire(
    //     `You selected: ${survey}`,
    //     'To continee click the button!',
    //     'success',
        
    //   )                                                                                                     
      this.show = true;
      this.onGoing = true;
      this.expireSurvey =true;
    
      this.onGoingSelectSurvey = !this.onGoingSelectSurvey;
      this.closeSelectSurvey =true;
      this.createNewSurvey = true;
      this.savedsurvey = true;
      this.menuToggle = false;
      this.informationSurvey = false;
      this.EditSelectSurvey = true;
      this.main = true;
    }
  // })() // FOR asnc end point of selected survey name 


 // FOR asnc start point of selected survey name 
 onClickCompletedSurvey() {
 
 // (async () => {
  // const { value: survey } = await Swal.fire({
  //   allowOutsideClick: false,
  //   position: 'top-end',
  //   title: 'Select Completed Survey Name',
  //   input: 'select',
  //   inputOptions: {

  //     HCL: 'HCL',
  //     TATAAIG: 'TATAAIG',
  //     CRISIL: 'CRISIL',
  //     ARMEZO: 'ARMEZO'
  //   },
  //   inputPlaceholder: 'Select a survey',
  //   showCancelButton: true,
  //   cancelButtonColor: '#d33',
  //   inputValidator: (value) => {
  //     return new Promise((resolve) => {
  //       if (value === '') {
  //         resolve('You need to select ')
  //       }else{
  //         resolve();
  //       } 
  //     })
  //   }
  // })
  
  // if (survey) {
  //   Swal.fire(
  //     `You have selected: ${survey}`,
  //     'To check expired survey details!',
  //     'success'
  //   )
      this.show = true;
      this.onGoing = true;
      this.expireSurvey =true;
      this.onGoingSelectSurvey = true;
      this.createNewSurvey = true;
      this.closeSelectSurvey = !this.closeSelectSurvey;
      this.savedsurvey = true;
      this.menuToggle = false;
      this.main = true;
  
  //}
  
//})() // FOR asnc end point of selected survey name 
}

CreateLaunch(){
  Swal.fire({
    //position: 'top-end',
    icon: 'success',
    title: 'Your Date and Time Fixed for Launching Survey',
    showConfirmButton: true,
    //'success'
    //timer: 1500
  })
  this.createNewSurvey = true;
 // this.closeSelectSurvey = !this.createNewSurvey;
}



detailSurvey(){
  //this.show = true;
  this.informationSurvey = false;
  this.EditSelectSurvey =true; 

}
editSurvey(){

  //this.show = true;
  this.EditSelectSurvey = !this.EditSelectSurvey; 
  this.informationSurvey = false;
}
EditSelectedSurvey(){
  this.EditSelectedTemplate = !this.EditSelectedTemplate;
  this.ListOnGoingSurvey = !this.ListOnGoingSurvey;
}

onClickTypeSurvey1(){
 this.menuToggle = true;
 this.main = !this.main;
  
}
draftEdit(){
  this.EditSelectedTemplate=true;
  this.closeSelectSurvey =true;
  this.createNewSurvey =  !this.createNewSurvey;

}
  
}
