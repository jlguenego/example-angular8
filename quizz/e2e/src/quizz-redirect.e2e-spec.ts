import { browser, logging } from 'protractor';
import { QuestionPage } from './question.po';

describe('workspace-project App', () => {
  let question: QuestionPage;

  beforeEach(() => {
    question  = new QuestionPage();
  });

  it('should redirect', async () => {
    await browser.executeScript('window.sessionStorage.clear();');
    await browser.executeScript('window.localStorage.clear();');
    await question.navigateTo();
    const url = browser.getCurrentUrl();
    expect(url).toBe('http://localhost:4202/');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
