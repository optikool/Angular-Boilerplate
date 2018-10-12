import { Component, OnInit } from '@angular/core';
import { locale } from '../../constants/locale.constant';
import { Collection } from '../../models/collection';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {
  locale: any;
  images: Array<Collection>

  constructor() {
    this.locale = null;
  }

  ngOnInit() {
    this.locale = locale;
  }

}
