import { Anguf2Page } from './app.po';

describe('anguf2 App', function() {
  let page: Anguf2Page;

  beforeEach(() => {
    page = new Anguf2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
