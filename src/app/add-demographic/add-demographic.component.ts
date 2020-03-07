import { Component, OnInit } from '@angular/core';
import { LessonModalComponent } from '../lesson-modal/lesson-modal.component';
import { MatDialog} from '@angular/material';
@Component({
  selector: 'app-add-demographic',
  templateUrl: './add-demographic.component.html',
  styleUrls: ['./add-demographic.component.css']
})
export class AddDemographicComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addDemographic(){
    
    this.dialog.open(LessonModalComponent);
  }
 
}
