<script>
	import Page from '$lib/components/page/Page.svelte';
	import Fa from 'svelte-fa';
	import * as icons from '@fortawesome/free-solid-svg-icons';

	import { CodeBlock } from '@skeletonlabs/skeleton';
	import Spinner from '$lib/components/page/Spinner.svelte';
	import TabelPlacholder from '$lib/components/page/TablePlaceholder.svelte';
</script>

<Page title="Design Convertions">
	<h2 class="h2">How to handle Actions</h2>

	<div class="table-container pt-5">
		<table class="table table-compact bg-tertiary-200">
			<thead>
				<tr class="bg-primary-300">
					<th> Function </th>
					<th> UI Component </th>
					<th> Example </th>
					<th> Code </th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Confirm</td>
					<td>Button / Chip / Badge</td>
					<td>
						<button class="btn variant-filled-primary"><Fa icon={icons.faCheck} /></button>
						<button class="chip variant-filled-primary"><Fa icon={icons.faCheck} /></button>
						<button class="badge variant-filled-primary"><Fa icon={icons.faCheck} /></button>
					</td>
					<td>
						<CodeBlock
							language="html"
							code={`<button class="btn variant-filled-primary"><Fa icon={faCheck}></Fa></button>`}
						/>
					</td>
				</tr>
				<tr>
					<td>Cancel</td>
					<td>Button / Chip / Badge</td>
					<td>
						<button class="btn variant-filled-warning"><Fa icon={icons.faXmark} /></button>
						<button class="chip variant-filled-warning"><Fa icon={icons.faXmark} /></button>
						<button class="badge variant-filled-warning"><Fa icon={icons.faXmark} /></button>
					</td>
					<td>
						<CodeBlock
							language="html"
							code={`<button class="btn variant-filled-warning"><Fa icon={faXmark}></Fa></button>`}
						/>
					</td>
				</tr>
				<tr>
					<td>Save</td>
					<td>Button / Chip / Badge</td>
					<td>
						<button class="btn variant-filled-primary"><Fa icon={icons.faSave} /></button>
						<button class="chip variant-filled-primary"><Fa icon={icons.faSave} /></button>
						<button class="badge variant-filled-primary"><Fa icon={icons.faSave} /></button>
					</td>
					<td>
						<CodeBlock
							language="html"
							code={`<button class="btn variant-filled-primary"><Fa icon={faSave}></Fa></button>`}
						/>
					</td>
				</tr>
				<tr>
					<td>Delete</td>
					<td>Button / Chip / Badge</td>
					<td>
						<button class="btn variant-filled-error"><Fa icon={icons.faTrash} /></button>
						<button class="chip variant-filled-error"><Fa icon={icons.faTrash} /></button>
						<button class="badge variant-filled-error"><Fa icon={icons.faTrash} /></button>
					</td>
					<td>
						<CodeBlock
							language="html"
							code={`<button class="btn variant-filled-error"><Fa icon={faTrash}></Fa></button>`}
						/>
					</td>
				</tr>
				<tr>
					<td>Edit</td>
					<td>Button / Chip / Badge</td>
					<td>
						<button class="btn variant-filled-primary"><Fa icon={icons.faPen} /></button>
						<button class="chip variant-filled-primary"><Fa icon={icons.faPen} /></button>
						<button class="badge variant-filled-primary"><Fa icon={icons.faPen} /></button>
					</td>
					<td>
						<CodeBlock
							language="html"
							code={`<button class="btn variant-filled-primary"><Fa icon={faPen}></Fa></button>`}
						/>
					</td>
				</tr>
				<tr>
					<td>Create</td>
					<td>Button / Chip / Badge</td>
					<td>
						<button class="btn variant-filled-primary"><Fa icon={icons.faPlus} /></button>
						<button class="chip variant-filled-primary"><Fa icon={icons.faPlus} /></button>
						<button class="badge variant-filled-primary"><Fa icon={icons.faPlus} /></button>
					</td>
					<td>
						<CodeBlock
							language="html"
							code={`<button class="btn variant-filled-primary"><Fa icon={faPen}></Fa></button>`}
						/>
					</td>
				</tr>
				<tr>
					<td>Show</td>
					<td>Button / Chip / Badge</td>
					<td>
						<button class="btn variant-filled-secondary"><Fa icon={icons.faEye} /></button>
						<button class="chip variant-filled-secondary"><Fa icon={icons.faEye} /></button>
						<button class="badge variant-filled-secondary"><Fa icon={icons.faEye} /></button>
					</td>
					<td>
						<CodeBlock
							language="html"
							code={`<button class="btn variant-filled-secondary"><Fa icon={faEye}></Fa></button>`}
						/>
					</td>
				</tr>
				<tr>
					<td>Disabled</td>
					<td>Button</td>
					<td>
						<button class="btn variant-filled-secondary" disabled><Fa icon={icons.faPen} /></button>
						<button class="chip variant-filled-secondary" disabled><Fa icon={icons.faPen} /></button
						>
						<button class="badge variant-filled-secondary" disabled
							><Fa icon={icons.faPen} /></button
						>
					</td>
					<td>
						<CodeBlock
							language="html"
							code={`<button class="btn variant-filled-secondary" disabled><Fa icon={faEdit}></Fa></button>`}
						/>
					</td>
				</tr>
				<tr>
					<td>Loading - 1</td>
					<td>Spinner</td>
					<td>
						<div>
							<Spinner label="...loading" />
						</div>
					</td>
					<td>
						<CodeBlock
							class="my-2"
							language="js"
							code={`import Spinner from '@bexis2/bexis2-core-ui';`}
						/>

						<CodeBlock class="my-2" language="html" code={`<Spinner label="...loading"/>`} />
					</td>
				</tr>

				<tr>
					<td>Loading - 1</td>
					<td>Placeholder</td>
					<td />
					<td rowspan="2">
						<CodeBlock
							language="html"
							code={`<section class="card w-full">
	<div class="p-4 space-y-4">
		<div class="placeholder" />
		<div class="grid grid-cols-3 gap-8">
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
		</div>
		<div class="grid grid-cols-4 gap-4">
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
			<div class="placeholder" />
		</div>
	</div>
</section>`}
						/>
					</td>
				</tr>
				<tr
					><td colspan="3">
						<div>
							<section class="card w-full">
								<div class="p-4 space-y-4">
									<div class="placeholder animate-pulse" />
									<div class="grid grid-cols-3 gap-2">
										<div class="placeholder animate-pulse" />
										<div class="placeholder animate-pulse" />
										<div class="placeholder animate-pulse" />
									</div>
								</div>
							</section>
						</div>
					</td></tr
				>
				<tr>
					<td>Loading - 1</td>
					<td>Table Placeholder</td>
					<td />
					<td rowspan="2">
						<CodeBlock
							class="my-2"
							language="js"
							code={`import TablePlaceholder from '@bexis2/bexis2-core-ui';`}
						/>
						<CodeBlock class="my-2" language="html" code={`<TablePlaceholder cols={2} rows={5}/>`} />
					</td>
				</tr>
				<tr>
					<td colspan="3">
						<p class="m-3">
							Parameters
							<li>cols: number of columns default is 1</li>
							<li>rows: number of rows default is 10</li>
						</p>
						<TablePlaceholder cols={2} rows={5} />
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</Page>
