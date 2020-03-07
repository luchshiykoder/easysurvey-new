import { Component, OnInit } from '@angular/core';
import { AddQuestionsComponent } from '../add-questions/add-questions.component';
import { MatDialog} from '@angular/material';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-lesson-modal',
  templateUrl: './lesson-modal.component.html',
  styleUrls: ['./lesson-modal.component.css']
})
export class LessonModalComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
  }
  todo = [
    'Email ID',
    'Phone Number',
    'Option1',
    'Option2',
    'Option3',
    'Option4',
    'Option5',
  ];

  done = [
    'Full Name',
    'Date of Birth'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

  // closeModal(){
  //   this.dialog.closeAll();
  // }

}
}
