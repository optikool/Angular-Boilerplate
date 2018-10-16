import { Component, OnInit } from '@angular/core';
import { locale } from '../../constants/locale.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  locale: any;
  copyYear: number;

  constructor() { 
    this.locale = null;
  }

  ngOnInit() {
    const date = new Date();
    this.copyYear = date.getFullYear();
    this.locale = locale;
  }
}
