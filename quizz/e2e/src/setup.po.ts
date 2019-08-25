import { browser, by, element } from 'protractor';

export class SetupPage {

  navigateTo() {
    return browser.get(browser.baseUrl + 'setup') as Promise<any>;
  }

  async clickOnAddQuestion() {
    const button = element(by.css('button'));
    await button.click();
  }

  async clickOnFinish() {
    const button = element(by.css('button.primary'));
    await button.click();
  }

}
