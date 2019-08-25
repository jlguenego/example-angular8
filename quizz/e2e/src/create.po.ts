import { browser, by, element } from 'protractor';

export class CreatePage {

  navigateTo() {
    return browser.get(browser.baseUrl + 'create') as Promise<any>;
  }

  writeOnInput(text: string) {
    const input = element(by.css('input'));
    return input.sendKeys(text);
  }

  clickOnNext() {
    const button = element(by.css('button'));
    return button.click();
  }

}
