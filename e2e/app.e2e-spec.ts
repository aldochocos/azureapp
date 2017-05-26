import { AzureappPage } from './app.po';

describe('azureapp App', () => {
  let page: AzureappPage;

  beforeEach(() => {
    page = new AzureappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
