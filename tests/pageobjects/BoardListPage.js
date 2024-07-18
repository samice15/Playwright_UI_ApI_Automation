import { test, expect } from '@playwright/test';

class BoardListPage {
  constructor(page) {
    this.page = page;
    this.inputName = page.getByRole('heading', { name: 'Create new board' });
    this.addTitle = page.getByPlaceholder('Add board title');
    this.pressEnter = page.getByPlaceholder('Add board title');

    this.veriNewboard = page.locator("//div[contains(text(),'Test Board')]");

    this.listTitle = page.getByPlaceholder('Enter list title...');
    this.listName = page.getByPlaceholder('Enter list title...');
    this.clickBtn = page.getByRole('button', { name: 'Add list' });
    this.listOneVerify = page.locator('#app > div > div > div > div:nth-child(2) > div:nth-child(1) > div > div.flex.mb-1');

    this.listtwoName = page.getByPlaceholder('Enter list title...');
    this.listtwoTitle = page.getByPlaceholder('Enter list title...');
    this.listtwoClick = page.getByRole('button', { name: 'Add list' });
    this.listtwoVerify = page.locator('#app > div > div > div > div:nth-child(2) > div:nth-child(2) > div > div.flex.mb-1');

    this.deBoardn = page.locator("div[class='inline-block relative']");
    this.deleClick = page.getByText('Delete board');
  }

  async goTo() {
    await this.page.goto('http://localhost:3000/');
  }

  async createBoard() {
    await this.inputName.click();
    await this.addTitle.fill('Test Board');
    await this.pressEnter.press('Enter');
  }

  async verifyBoard() {
    await expect(this.veriNewboard).toHaveText('Test Board');
  }

  async createListone() {
    await this.listTitle.click();
    await this.listName.fill('Test List 1');
    await this.clickBtn.click();
  }

  async verifyListone() {
    await expect(this.listOneVerify).toBeVisible();
  }

  async createListtwo() {
    await this.listtwoName.click();
    await this.listtwoTitle.fill('Test list 2');
    await this.listtwoClick.click();
  }

  async verifyListtwo() {
    await expect(this.listtwoVerify).toBeVisible();
  }

  async deleteBoard() {
    await this.deBoardn.click();
    await this.deleClick.click();
  }
}

module.exports = { BoardListPage };
