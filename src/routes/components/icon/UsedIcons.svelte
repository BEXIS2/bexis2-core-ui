<script>
	import Fa from 'svelte-fa/src/fa.svelte';

	import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
	import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
	import { faSave } from '@fortawesome/free-solid-svg-icons';
	import { faEye } from '@fortawesome/free-solid-svg-icons';
	import { faPen } from '@fortawesome/free-solid-svg-icons';
	import { faTrash } from '@fortawesome/free-solid-svg-icons';
</script>

<div>
	<table class="table table-compact bg-tertiary-200">
		<thead>
			<tr class="bg-primary-300">
				<th>Icon</th>
				<th>Id</th>
				<th>Case</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><Fa icon={faAngleDown} /></td>
				<td>faAngleDown</td>
				<td>Expand</td>
			</tr>
			<tr>
				<td><Fa icon={faAngleRight} /></td>
				<td>faAngleRight</td>
				<td>Collapse</td>
			</tr>
			<tr>
				<td><Fa icon={faSave} /></td>
				<td>faSave</td>
				<td>Save</td>
			</tr>
			<tr>
				<td><Fa icon={faEye} /></td>
				<td>faEye</td>
				<td>Show</td>
			</tr>
			<tr>
				<td><Fa icon={faPen} /></td>
				<td>faPen</td>
				<td>Edit</td>
			</tr>
			<tr>
				<td><Fa icon={faTrash} /></td>
				<td>faTrash</td>
				<td>Delete</td>
			</tr>
		</tbody>
	</table>
</div>
