import { Component, OnInit } from '@angular/core';
import { locale } from '../../constants/locale.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  locale: any;

  constructor() { 
    this.locale = null;
  }

  ngOnInit() {
    this.locale = locale;
  }
}
