import { test, expect } from '@playwright/test';
const { BoardListPage } = require('./pageobjects/BoardListPage');

test('Input a Board name and Add two lists', async ({ page }) => {
  //Creat New Board
  const boardListPage = new BoardListPage(page);
  boardListPage.createBoard();
  await boardListPage.goTo();

  // Verify Board created successfully
  await boardListPage.verifyBoard();

  // List 1 created
  await boardListPage.createListone();

  // Verifying List 1 created successfully
  await boardListPage.verifyListone();
  // List 2 created

  await boardListPage.createListtwo();
  // Verifying List 2 created successfully
  await boardListPage.verifyListtwo();

  //Delete the board
  await boardListPage.deleteBoard();
});
