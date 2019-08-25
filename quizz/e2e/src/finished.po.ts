import { browser, by, element } from 'protractor';

export class FinishedPage {

  navigateTo() {
    return browser.get(browser.baseUrl + 'finished') as Promise<any>;
  }

  async clickOnReturnHome() {
    const button = await element(by.css('button'));
    await button.click();
  }

}
