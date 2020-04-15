import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-add-demographic',
  templateUrl: './add-demographic.component.html',
  styleUrls: ['./add-demographic.component.css']
})
export class AddDemographicComponent implements OnInit {

  constructor(public dialog: MatDialog,  private modalService: NgbModal,) { }

  ngOnInit() {
  }


    //open modal of add demographics 
    open(AddDemographic) {
      this.modalService.open(AddDemographic, {ariaLabelledBy: 'modal-basic-title',  windowClass:'lgModal'});
    }

    //drag-drop for add demographics 
    todo = [
      'Address',
      'Zone',
      'Option1',
      'Option2',
      'Option3',
      'Option4',
      'Option5',
    ];
  
    done = [
      'Full Name',
      'Date of Birth',
      'Email ID',
      'Mobile'
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
      //end drag-drop for add demographics  
}
}