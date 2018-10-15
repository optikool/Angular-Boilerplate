import { Component } from '@angular/core';
import { Collection } from '../../models/collection';

@Component({
  selector: 'ngbd-modal-dialog',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class NgbdModalDialog {
  closeReason: string;

  constructor() {}

  open(collection: Collection) {
    
  }
}