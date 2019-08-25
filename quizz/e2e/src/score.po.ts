import { browser, by, element } from 'protractor';

export class ScorePage {

  navigateTo() {
    return browser.get(browser.baseUrl + 'list') as Promise<any>;
  }

  async testImageBravo() {
    const image = element(by.css('fa-icon svg'));
    const faIconName = image.getAttribute('data-icon');
    console.log('faIconName: ', faIconName);
    expect(faIconName).toBe('smile-wink');
  }

  async testScore(score: number) {
    const scoreText = element(by.css('p span.score')).getText();
    expect(scoreText).toBe('' + score);
  }

}
