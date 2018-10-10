import { CommonNavModule } from './common-nav.module';

describe('CommonNavModule', () => {
  let commonNavModule: CommonNavModule;

  beforeEach(() => {
    commonNavModule = new CommonNavModule();
  });

  it('should create an instance', () => {
    expect(commonNavModule).toBeTruthy();
  });
});
