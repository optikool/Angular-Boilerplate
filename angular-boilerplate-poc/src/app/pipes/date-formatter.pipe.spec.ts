import { DateFormatterPipe } from './date-formatter.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

describe('DateFormatterPipe', () => {
  it('create an instance', () => {
    const sanitized: DomSanitizer = null;
    const datePipe: DatePipe = new DatePipe('en-US');
    const pipe = new DateFormatterPipe(sanitized, datePipe);
    expect(pipe).toBeTruthy();
  });
});
