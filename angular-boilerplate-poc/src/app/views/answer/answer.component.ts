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
  closeReason: string;

  constructor(private store: Store<fromApp.AppState>, private modalService: NgbModal) {
    this.locale = null;
  }

  ngOnInit() {
    this.locale = locale;
  }

  openModal(data) {
    const modalRef = this.modalService.open(NgbdModalDialog, {size: 'lg', centered: true});
    modalRef.componentInstance.collection = data;
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
