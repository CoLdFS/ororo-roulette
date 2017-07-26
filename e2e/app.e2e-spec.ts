import { OroroSpinPage } from './app.po';

describe('ororo-spin App', () => {
  let page: OroroSpinPage;

  beforeEach(() => {
    page = new OroroSpinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
