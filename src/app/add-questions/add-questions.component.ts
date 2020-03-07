import { Component, OnInit } from '@angular/core';
import { LessonModalComponent } from '../lesson-modal/lesson-modal.component';
import { MatDialog} from '@angular/material';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddQuestion(){
    
    this.dialog.open(LessonModalComponent);
  }
 

  

}
