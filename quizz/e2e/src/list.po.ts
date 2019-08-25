import { browser, by, element } from 'protractor';

export class ListPage {

  navigateTo() {
    return browser.get(browser.baseUrl + 'list') as Promise<any>;
  }

  async checkQuizzExist(title: string) {
    const texts = await element.all(by.css('button')).getText();
    const isExisting = texts.includes(title);
    expect(isExisting).toBe(true);
  }

  async clickOnQuizzButton(title: string) {
    const button = element(by.xpath(`//button[text()="${title}"]`));
    await button.click();
  }

}
