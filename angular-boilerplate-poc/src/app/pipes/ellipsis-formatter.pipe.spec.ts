import { EllipsisFormatterPipe } from './ellipsis-formatter.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('EllipsisFormatterPipe', () => {
  it('create an instance', () => {
    const sanitized: DomSanitizer = null;
    const pipe = new EllipsisFormatterPipe(sanitized);
    expect(pipe).toBeTruthy();
  });
});
