import { Component, OnInit } from '@angular/core';
import { AddQuestionsComponent } from '../add-questions/add-questions.component';
import { MatDialog} from '@angular/material';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-lesson-modal',
  templateUrl: './lesson-modal.component.html',
  styleUrls: ['./lesson-modal.component.css']
})
export class LessonModalComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
  }

  closeModal(){
    this.dialog.closeAll();
  }

}
