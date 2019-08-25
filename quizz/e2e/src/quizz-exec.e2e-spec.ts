import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { CreatePage } from './create.po';
import { SetupPage } from './setup.po';
import { AddQuestionPage } from './add-question.po';
import { FinishedPage } from './finished.po';
import { ListPage } from './list.po';
import { QuestionPage } from './question.po';
import { ScorePage } from './score.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let list: ListPage;
  let question: QuestionPage;
  let score: ScorePage;

  beforeEach(() => {
    page = new AppPage();
    list = new ListPage();
    question  = new QuestionPage();
    score = new ScorePage();
  });

  it('should exec a quizz', async () => {
    await page.navigateTo();
    await page.clickOnDoQuizzButton();
    const title = 'Les capitales d\'Europe';
    await list.clickOnQuizzButton(title);
    await question.clickOnAnswer('B');
    await question.clickOnNextButton();
    await score.testScore(1);
    await score.testImageBravo();
    await browser.sleep(1000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
