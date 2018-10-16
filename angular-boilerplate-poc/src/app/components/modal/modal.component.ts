import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Collection } from '../../models/collection';

@Component({
  selector: 'ngbd-modal-dialog',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class NgbdModalDialog implements OnInit {
  @Input() public collection: Collection;

  closeReason: string;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit() {
    console.log('collection: ', this.collection);
  }
  close(collection: Collection) {
    this.activeModal.close();
  }
}