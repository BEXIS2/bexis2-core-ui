# Initial setup
Download and install Playwright in your Svelte project by following this [link](https://playwright.dev/docs/intro#installing-playwright).

It is recommended to install Playwright's official Visual Studio Code [extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) for a better testing experience and an interactive GUI.
## Playwright configuration
After installation, a configuration file named `playwright.config.ts` will be created at the root directory.  The file is initialized with defaults, however, you may check it to customize and uncomment lines for your liking. 
### Reading from environment variables
To use shared functions in your test such as access to host URL or login function as well as adding additional environment variables, you need to install [dotenv](https://www.npmjs.com/package/dotenv) package from npm.

To enable reading from environment variables in tests, uncomment the 7th line in your config file:
```typescript
import { defineConfig, devices } from  '@playwright/test';

/**
* Read environment variables from file.
* https://github.com/motdotla/dotenv
*/
require('dotenv').config(); // 7th line
```
If you are using ES6 syntax, you may use the `import` syntax instead:
```typescript
import { defineConfig, devices } from  '@playwright/test';

/**
* Read environment variables from file.
* https://github.com/motdotla/dotenv
*/
import 'dotenv/config'; // 7th line
```
### fullyParallel
By default, Playwright runs all the tests in parallel, meaning, tests should be isolated to not interfere with one another and to enable multithreading. However, some tests, especially CRUD functionalities, may require serially running the tests. If the majority of the tests are run serially, then, you may change the value of `fullyParallel` in the config file to false. You can configure individual test files as [serial](https://playwright.dev/docs/test-parallel#serial-mode) or [parallel](https://playwright.dev/docs/test-parallel#parallelize-tests-in-a-single-file) in the file itself. 
## Shared functions
Create a `.env` file in the root folder of the project for your user credentials and host URL. `HOST`, `USER` and `PASSWORD` are the environment variables required to run shared functions.
\
Here's an example `.env` file contents:
```bash
export HOST="https://localhost:4173"
export USER="user"
export PASSWORD="user"
```
### Using shared variables
Importing shared functions from `shared.ts`:
```typescript
import { login, host } from  './shared';
```
\
Usage of shared functions in tests:
```typescript
test('Test', async ({ page }) => {
    await login(page); // Login
    await page.goto(`${host}/test/`); // Go to /test route
});
```
