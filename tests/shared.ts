import 'dotenv/config'; // necessary to read .env file

import { expect } from '@playwright/test';
import type { Page } from '@playwright/test';

export const host = process.env.HOST;

const user = process.env.USER as string;
const password = process.env.PASSWORD as string;

export const login = async (page: Page) => {
	await page.goto(`${host}/Account/Login`);
	await page.locator('#UserName').fill(user);
	await page.locator('#Password').fill(password);
	await page.locator('input[type=submit]').click();
	await expect(page.url()).toBe(`${host}/`);
};
