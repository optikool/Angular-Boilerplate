import { Component, OnInit } from '@angular/core';
import { locale } from '../../constants/locale.constant';
import { Collection } from '../../interfaces/collection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  locale: any;
  introText: string;
  imagePlaceHolder: Collection;

  constructor() { 
    this.locale = null;
    this.introText = '';
  }

  ngOnInit() {
    this.locale = locale;
    this.introText = this.locale.IntroText;
    //this.imagePlaceHolder = this.fetchRandomCollection();
  }

}
