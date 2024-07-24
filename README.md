Install the app, simply clone this project and

1. `npm install`
2. `npm start`

## Tasks

**UI Automation**

```
1. Input a Board name, press enter. Verify Board created successfully.
2. Add two lists and verify two lists created successfully.
3. Delete a list.
```

**API Automation**

```
1. Add a new list
2. Delete the newly created list
```

** Tools Used For UI and API Automation:**

- Playwright with JavaScript For both UI and API Automation.

** To run the test :

- Open your terminal and write "npx playwright test UIAutomation.spec.js" (For UI Automation).
- Open your terminal and write "npx playwright test api_test.spec.js" (For API Automation).

  
** To run the both UI & API test together :

  - Open your terminal and write " npx playwright test --ui ".
  - 
  
** To see the result :

- Open your terminal and write "npx playwright show-report" (For Playwright Report)

- Open your terminal and write " npx playwright test --ui " (For All Report)
