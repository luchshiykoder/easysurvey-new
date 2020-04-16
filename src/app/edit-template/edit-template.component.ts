import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import Swal from 'sweetalert2';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {SurveyDataService} from "../_services/DataServices/survey.data.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ExcelService} from '../_services/excel.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SurveyService } from "../_services/survey-services/survey.service";
import { surveyModel } from '../_models/surveyModel';
import {  PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Dimension {
  name: string;
  status: number;
  survey: number;
}

const DIMENSIONS: Dimension[] = [
  {
    name: 'Education',
    status: 0,
    survey: 1
  },
  {
    name: 'HR',
    status: 1,
    survey: 2
  },
  {
    name: 'Performance',
    status: 0,
    survey: 3
  },
  {
    name: 'Attendance',
    status: 1,
    survey: 4
  }
];



function search(text: string, pipe: PipeTransform): Dimension[] {
  return DIMENSIONS.filter(dimension => {
    const term = text.toLowerCase();
    return dimension.name.toLowerCase().includes(term)
        || pipe.transform(dimension.status).includes(term)
        || pipe.transform(dimension.survey).includes(term);
  });
}



@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DecimalPipe],
 // styles: [``]
})

//Sample survey question list in ADD QUESTION TAB 
  export class EditTemplateComponent implements OnInit {
    dimensions = DIMENSIONS;//saved dimension list 
    qs = ['Question 1: Question according to your requirements with option type?',
      ' Question 2: Question according to your requirements with option type?',
      ' Question 3: Question according to your requirements with option type?'
    ];
  // qs: number[] = [1, 2, 3];
    copy() {
    alert('check ts code' );
      //this.qs.push(this.qs.length + 1)
    }
    
  //end Sample survey question list in ADD QUESTION TAB 

 //drag - drop for add demograpgics
    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.qs, event.previousIndex, event.currentIndex);
    }
  //end drag - drop for add demograpgics

  //respondant list-sample data 
    checkTabSelection:boolean
    data: any = [{
      fname: 'NA',
      dob: 'NA',
      email: 'NA',
      mobile:'NA'
    }];
  //end respondant list-sample data 

  selectedType = '';
  onChange(event) {
    this.selectedType = event.target.value;
  }
  dimensions$: Observable<Dimension[]>;
  filter = new FormControl('');
  currSurvey:surveyModel;
  constructor(
    pipe:DecimalPipe,
    private _surveyDataService:SurveyDataService,
    private surveyService:SurveyService,
    private modalService: NgbModal,
    private excelService:ExcelService) {
      this.dimensions$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => search(text, pipe))
      );
    }
    
  
  //Welcome Template Model
    open(welcome) {
      this.modalService.open(welcome, {ariaLabelledBy: 'modal-basic-title',  windowClass:'lgModal'});
    }
  //Add new dimention 
    open2(addDimension) {
    this.modalService.open(addDimension, {ariaLabelledBy: 'modal-basic-title', windowClass:'smModal'});
    }
  //Add Question Model
    open3(addquestion) {
    this.modalService.open(addquestion, { ariaLabelledBy: 'modal-basic-title', windowClass:'lgModal',  backdrop: 'static', keyboard: false});
    }
     //Add DimensionList Model
     open4(invitation) {
      this.modalService.open(invitation, {ariaLabelledBy: 'modal-basic-title', windowClass:'smModal'});
    }
  //Add DimensionList Model
    open5(dimensionList) {
      this.modalService.open(dimensionList, {ariaLabelledBy: 'modal-basic-title', windowClass:'smModal'});
    }
    

    exportAsXLSX():void {
      this.excelService.exportAsExcelFile(this.data, 'sample');
    }
  
  ngOnInit() {
    this.surveyService.GetCurrentSurvey().subscribe(
      data =>{
        this.currSurvey=data;
        console.log("survey name : "+this.currSurvey.surveyName);
       
      }
    );

  }

  public editSurveyDetails:boolean = true;
  public createNewSurvey:boolean = true;
  public main:boolean = true;
  public launchSurvey:boolean = true;
  public golaunchButton:boolean = false;
  public launchSurveyArea:boolean = true;
  public hideAfterReady:boolean =false;
  


//Text Editors
show = false;
//htmlContent = '';
editorConfig: AngularEditorConfig = {
  editable: true,
    spellcheck: true,
    height: '9rem',
    minHeight: '20rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ],
  uploadUrl: 'v1/image',
  sanitize: true,
  toolbarPosition: 'top',
  toolbarHiddenButtons: [
    ['bold', 'italic'],
    ['fontSize']
  ]
};

//Upload Logo on Welcome Page
public imagePath;
imgURL: any;
imgSize:any;
imagName:any;
imgType:any;
imgModifyDate:any;
public message: string;


preview(event) {
  for (var i = 0; i < event.target.files.length; i++) {
    this.imagName = event.target.files[i].name;
    this.imgType = event.target.files[i].type;
    this.imgSize = event.target.files[i].size;
    this.imgSize = Math.round(this.imgSize / 1024) + " KB";
    this.imgModifyDate = event.target.files[i].lastModifiedDate;     
  }
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event) => {
  this.imgURL = (<FileReader>event.target).result;
  this.currSurvey.WelcomeMsgEntity.welcomeLogo = this.imgURL;
  this.surveyService.CreateSurvey(this.currSurvey);
  localStorage.setItem("WelcomeImageURL",this.imgURL);
  console.log("Image url : "+this.imgURL);     
}
console.log('Name: ' + this.imagName + "\n" +
'Type: ' + this.imgType + "\n" +
'Last-Modified-Date: ' + this.imgModifyDate + "\n" +
'Size: ' + this.imgSize);
}

//uplaod image for options
imageError: string;
isImageSaved: boolean;
cardImageBase64: string;
fileChangeEvent(fileInput: any) {
  this.imageError = null;
  if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      if (fileInput.target.files[0].size > max_size) {
          this.imageError =
              'Maximum size allowed is ' + max_size / 1000 + 'Mb';
          return false;
      }
      
      const reader = new FileReader();
      reader.onload = (e: any) => {
          const image = new Image();
          image.src = e.target.result;
          image.onload = rs => {
              const img_height = rs.currentTarget['height'];
              const img_width = rs.currentTarget['width'];
              console.log(img_height, img_width);
              if (img_height > max_height && img_width > max_width) {
                  this.imageError =
                      'Maximum dimentions allowed ' +
                      max_height +
                      '*' +
                      max_width +
                      'px';
                  return false;
              } else {
                  const imgBase64Path = e.target.result;
                  this.cardImageBase64 = imgBase64Path;
                  this.isImageSaved = true;
                  // this.previewImagePath = imgBase64Path;
              }
          };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
  }
}
//remove upload sample image for options
removeImage() {
  this.cardImageBase64 = null;
  this.isImageSaved = false;
}
//last save survey for launch
saveSurvey(){
  this.golaunchButton=true;
}
golaunchButtonSurvey(){
  this.launchSurveyArea=false;
  this.hideAfterReady=true;
  this.golaunchButton=false;

}

//edit survey after creation
editSurveyName(){  
      (async () => {
        const { value: text } = await Swal.fire({
          allowOutsideClick: false,
      
          title: 'Re-Enter Survey Name',
          input: 'text',
          inputPlaceholder: 'Enter New Survey Name'
        })
        
        if (text) {
          
          //const answers = JSON.stringify(result.value)
        // this.CurrSurvey.SurveryName = text;
        //this._surveyDataService.CreateSurvey(this.CurrSurvey);
          Swal.fire(
            //`Survey Name ${answers}`,
            'You have successfully changed the survey name, now!',
            'success'
          )       
        
        }    console.log(text);
      })() // FOR asnc end point of TYPE SURVEY NAME 
  } // FOR TYPE SURVEY NAME 
 




//Tabs on Create survey details 
selectedUserTab = 1;
   tabs = [
    {
      name: 'Upload Survey Logo ',
      key: 1,
      active: true
    },
     {
       name: 'Welcome Template ',
       key: 2,
       active: true
     },
      {
      name: ' Email Template',
      key: 3,
      active: false
    },
    {
      name: 'Add Questions',
      key: 4,
      active: false
    },
    {
      name: ' Respondant',
      key: 5,
      active: false
    },
    {
      name: ' End Date',
      key: 6,
      active: false
    }
   ];

  tabChange(selectedTab) {

      this.selectedUserTab = selectedTab.key;
      for (let tab of this.tabs) {
          if (tab.key === selectedTab.key) {
            tab.active = true;
          } else {
            tab.active = false;
          }
         // console.log('showTab');
      }
    } 

private selectedLink: string="";        
  
  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
  isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
  }  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }  

    //for sending Invitation/Reminder mail
    
    
  //ask from sagar  
  SaveLogoTempalte(){      
  console.log("Welcome logo : "+ this.currSurvey.WelcomeMsgEntity.welcomeLogo);
  this.surveyService.CreateSurvey(this.currSurvey);
  if(this.currSurvey.WelcomeMsgEntity.welcomeLogo!=""){
      this.tabs[0].active = true;
      
  }
  else
  {
    this.tabs[0].active = false;
  }
 
  Swal.fire({
    icon: 'success',
    title: 'Welcome Logo Saved for this Survey',
    showConfirmButton: true,
    launch:false,
    timer: 2000
  })
}

//SAVED LOGO notification
SaveWelcomTempalte(){      
  console.log("Welcome Messaage : "+ this.currSurvey.WelcomeMsgEntity.welcomeMessage); 
  if(this.currSurvey.WelcomeMsgEntity.welcomeMessage!=""){
      this.tabs[2].active = true;      
  }
  else
  {
    this.tabs[2].active = false;
  }
  Swal.fire({
    icon: 'success',
    title: 'Welcome Template Saved for this Survey',
    showConfirmButton: true,
    launch:false,
    timer: 2000
  })
}//end SAVED LOGO notification



}