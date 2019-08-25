import { browser, by, element } from 'protractor';

export class AddQuestionPage {

  navigateTo() {
    return browser.get(browser.baseUrl + 'add-question') as Promise<any>;
  }

  async writeLabel(text: string) {
    const textarea = element(by.css('textarea'));
    await textarea.clear();
    await textarea.sendKeys(text);
  }

  async writeAnswer(letter: string, text: string) {
    const inputs = await element.all(by.css('.text-inputs input'));
    const num = letter.charCodeAt(0) - 'A'.charCodeAt(0);
    const input = inputs[num];
    await input.clear();
    await input.sendKeys(text);
  }

  async selectCorrectAnswer(letter: string) {
    const num = letter.charCodeAt(0) - 'A'.charCodeAt(0);
    const inputs = await element.all(by.css('.radio-inputs input'));
    await inputs[num].click();
  }

  async clickOnAddButton() {
    const button = element(by.css('button.primary'));
    await button.click();
  }

}
