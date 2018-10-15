import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { locale } from '../../constants/locale.constant';
import { Collection } from '../../models/collection';
import { NgbdModalDialog } from '../../components/modal/modal.component'
import * as fromApp from '../../store/app.reducers';
import * as CollectionActions from '../../store/collection/collection.actions';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit, OnDestroy, AfterViewInit {
  locale: any;
  images: Array<Collection>
  previewLink: Collection;
  subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>, private modalService: NgbModal) {
    this.locale = null;
  }

  ngOnInit() {
    this.locale = locale;
  }

  openModal(data) {
    console.log('Opening image in modal: ', data);
    // this.modalService.open(collection, {ariaLabelledBy: 'modal-collection-title'})
    //   .result.then((result) => {
    //     this.closeReason = `Close with: ${result}`;
    //   }, (reason) => {
    //     this.closeReason = `Dismissed ${this.getDismissReason(reason)}`;
    //   });
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  ngAfterViewInit() {
    this.store.dispatch(new CollectionActions.FetchCollections());
    this.subscription = this.store.select('collectionList')
      .pipe(delay(0))
      .subscribe(
        data => {
          this.images = data.collections;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
