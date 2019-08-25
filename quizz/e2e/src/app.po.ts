import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-header a span')).getText() as Promise<string>;
  }

  clickOnCreateQuizzButton() {
    const button = element(by.css('button'));
    return button.click();
  }

  async clickOnDoQuizzButton() {
    const buttons = await element.all(by.css('main button'));
    console.log('buttons', buttons);
    console.log('buttons.length', buttons.length);
    await buttons[1].click();
  }
}
