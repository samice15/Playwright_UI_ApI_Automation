import { test, expect } from '@playwright/test';

test('Adding a new list', async ({ request }) => {
  const response = await request.post('http://localhost:3000/api/lists', {
    data: {
      name: 'Creating new list',
      boardId: 2,
      order: 0,
    },
  });

  expect(response.status()).toBe(201);

  const text = await response.text();
  expect(text).toContain('Creating new list');

  console.log(await response.json());
});

test('Deleting the newly created list', async ({ request }) => {
  const response = await request.delete('http://localhost:3000/api/lists', {
    data: {
      name: 'Creating new list',
      boardId: 2,
      order: 0,
    },
  });

  expect(response.status()).toBe(204);
});
