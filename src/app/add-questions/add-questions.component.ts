import { Component, OnInit } from '@angular/core';
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
    alert('add question');
    //this.dialog.open(LessonModalComponent);
  }
 

  

}
