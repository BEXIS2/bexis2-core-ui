<script lang="ts">
	import CodeContainer from '$docs/components/CodeContainer.svelte';
	import { simpleTableHTML, usersStoreCode } from '../data/codeBlocks';
	import { usersStore } from '../data/data';
</script>

<div id="simpleTable">
	<CodeContainer
		title="Simple table without Table component"
		svelte={simpleTableHTML}
		data={usersStoreCode}
	>
		<div class="pb-2">
			Used classes are important to include for the table to have a uniform look.
		</div>

		<div class="table-container">
			<table class="table table-compact bg-tertiary-200">
				<thead>
					<tr class="bg-primary-300">
						<th class="!p-2">Group</th>
						<th class="!p-2">Description</th>
					</tr>
				</thead>
				<tbody>
					{#each $usersStore as user}
						<tr>
							<td>{user.name}</td>
							<td>
								<div>{user.group}</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</CodeContainer>
</div>
