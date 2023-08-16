import { test, expect, type Page } from '@playwright/test';

import { login, host } from './shared';

test.describe('RPM Unit', () => {
	// Declare page outside of the test hooks so it's accessible by all tests.
	let page: Page;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage(); // Create new page
		await login(page); // Login
		await page.goto(`${host}/rpm/unit/`); // Go to UnitManager page
	});

	test.afterAll(async () => {
		await page.close(); // Close the page after all tests
	});

	test('Title', async () => {
		// Check the title of the table
		const title = await page
			.locator('.w-full', { has: page.locator('.table.table-compact') })
			.locator('h1.h1');
		await expect(title).toHaveText('Units');
	});

	// Unique name for the unit
	const unit = `test-${+Date.now()}`;

	test.describe('Create new Unit', () => {
		test('Title', async () => {
			const title = await page
				.locator('.w-full', { has: page.locator('.table.table-compact') })
				.locator('div.h3');
			await expect(title).toHaveText('Create neẇ Unit');
		});

		test('Fill the form and check toast', async () => {
			// Click on the create button
			await page.locator('#create').click();
			// Fill in Name
			await page.locator('input[id=name]').fill(unit);
			// Fill in Abbreviation
			await page.locator('input[id=abbreviation]').fill(unit);
			// Fill in Description
			await page.locator('textarea[id=description]').fill('Test description');
			// Select Data Types
			await page.locator('.svelte-select.multi').click();
			await page.locator('.list-item .item.first').click();
			// Select Dimension
			await page.locator('select[id=dimension]').selectOption('1');
			// Select Measurement System
			await page.locator('.radio-item:has-text("Unknown")').click();
			// Save
			await page.locator('button[id=save]').click();

			// Wait until the toast appears
			await page.waitForSelector('.toast[data-testid=toast] .text-base');

			// Check the toast message
			const toast = await page.locator('.toast[data-testid=toast]');
			await expect(await toast.locator('.text-base')).toHaveText(`Unit "${unit}" (${unit}) saved.`);
			await toast.locator('button').click(); // Close the toast
		});

		test('Find the new unit in the table', async () => {
			// Search for the new unit
			await page.locator('.table-container').getByPlaceholder('Search rows...').fill(unit);
			// Check values for the row
			const cols = await page.locator('.table.table-compact').locator('tr').locator('td');
			await expect(cols.first()).toHaveText(unit);
			await expect(cols.nth(1)).toHaveText('Test description');
			await expect(cols.nth(2)).toHaveText(unit);
			await expect(cols.nth(3)).toHaveText('none');
			await expect(cols.nth(4)).toHaveText('string');
			await expect(cols.nth(5)).toHaveText('Unknown');
		});
	});

	test.describe('Edit the new Unit', () => {
		test('Title', async () => {
			await page.getByTitle(`Edit Unit, ${unit}`).click(); // Click on the edit button

			const title = await page
				.locator('.w-full', { has: page.locator('.table.table-compact') })
				.locator('div.h3');
			await expect(title).toHaveText(unit);
		});

		test('Edit values and check toast', async () => {
			// Fill in Name
			await page.locator('input[id=name]').fill(unit);
			// Fill in Abbreviation
			await page.locator('input[id=abbreviation]').fill(unit);
			// Fill in Description
			await page.locator('textarea[id=description]').fill('Test description edited');
			// Select Data Types
			await page.locator('.svelte-select.multi').click();
			await page.locator('.list-item .item').nth(1).click();
			// Select Dimension
			await page.locator('select[id=dimension]').selectOption('2');
			// Select Measurement System
			await page.locator('.radio-item:has-text("Metric")').click();
			// Save
			await page.locator('button[id=save]').click();

			// Wait until the toast appears
			await page.waitForSelector('.toast[data-testid=toast] .text-base');

			// Check the toast message
			const toast = await page.locator('.toast[data-testid=toast]');
			await expect(await toast.locator('.text-base')).toHaveText(`Unit "${unit}" (${unit}) saved.`);
			await toast.locator('button').click(); // Close the toast
		});

		test('Find the edited unit in the table', async () => {
			const cols = await page.locator('.table.table-compact').locator('tr').locator('td');
			// Check values for the row
			await expect(cols.first()).toHaveText(unit);
			await expect(cols.nth(1)).toHaveText('Test description edited');
			await expect(cols.nth(2)).toHaveText(unit);
			await expect(cols.nth(3)).toHaveText('dimensionless');
			await expect(cols.nth(4).locator('li').first()).toHaveText('string');
			await expect(cols.nth(4).locator('li').nth(1)).toHaveText('date');
			await expect(cols.nth(5)).toHaveText('Metric');
		});
	});

	test.describe('Delete the new Unit', () => {
		test('Delete the unit', async () => {
			await page.getByTitle(`Delete Unit, ${unit}`).click(); // Click on the delete button

			// Wait until the modal appears
			await page.waitForSelector('.modal');

			// Check the modal title
			await expect(page.locator('.modal-header')).toHaveText('Delete Unit');
			await expect(page.locator('.modal-body')).toHaveText(
				`Are you sure you wish to delete Unit "${unit}" (${unit})?`
			);

			// Click Confirm
			await page.locator('.modal-footer').locator('button.variant-filled').click();
		});

		test('Check toast', async () => {
			// Wait until the toast appears
			await page.waitForSelector('.toast[data-testid=toast] .text-base');

			// Check the toast message
			const toast = await page.locator('.toast[data-testid=toast]');
			await expect(await toast.locator('.text-base')).toHaveText(
				`Unit "${unit}" (${unit}) deleted.`
			);
			await toast.locator('button').click(); // Close the toast
		});
	});
});
