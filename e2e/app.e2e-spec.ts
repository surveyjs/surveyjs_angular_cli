import { SurveyjsAngularCliPage } from './app.po';

describe('surveyjs-angular-cli App', () => {
  let page: SurveyjsAngularCliPage;

  beforeEach(() => {
    page = new SurveyjsAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
