import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { CreatePage } from './create.po';
import { SetupPage } from './setup.po';
import { AddQuestionPage } from './add-question.po';
import { FinishedPage } from './finished.po';
import { ListPage } from './list.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let create: CreatePage;
  let setup: SetupPage;
  let addQuestion: AddQuestionPage;
  let finished: FinishedPage;
  let list: ListPage;

  beforeEach(() => {
    page = new AppPage();
    create = new CreatePage();
    setup = new SetupPage();
    addQuestion = new AddQuestionPage();
    finished = new FinishedPage();
    list = new ListPage();
  });

  it('should create a quizz', async () => {
    await page.navigateTo();
    await page.clickOnCreateQuizzButton();
    const title = 'Les capitales d\'Europe';
    await create.writeOnInput(title);
    await create.clickOnNext();
    await setup.clickOnAddQuestion();
    await addQuestion.writeLabel('Quelle est la capitale de la Belgique ?');
    await addQuestion.writeAnswer('A', 'Stockholm');
    await addQuestion.writeAnswer('B', 'Bruxelles');
    await addQuestion.writeAnswer('C', 'Pragues');
    await addQuestion.writeAnswer('D', 'Oslo');
    await addQuestion.selectCorrectAnswer('B');
    await addQuestion.clickOnAddButton();
    await setup.clickOnFinish();
    await finished.clickOnReturnHome();
    await page.clickOnDoQuizzButton();
    await list.checkQuizzExist(title);
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
