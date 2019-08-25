import { browser, by, element } from 'protractor';

export class QuestionPage {

  navigateTo() {
    return browser.get(browser.baseUrl + 'list') as Promise<any>;
  }

  async clickOnAnswer(letter: string) {
    const num = letter.charCodeAt(0) - 'A'.charCodeAt(0);
    const inputs = await element.all(by.css('.answers input'));
    console.log('inputs.length', inputs.length);
    const input = inputs[num];
    await input.click();
  }

  async clickOnNextButton() {
    const button = element(by.css('button.primary'));
    await button.click();
  }

}
