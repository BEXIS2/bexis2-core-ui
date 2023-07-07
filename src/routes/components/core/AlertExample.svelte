<script>
	import Alert from '$lib/components/page/Alert.svelte';
	import Fa from 'svelte-fa';

	import { faEdit, faCableCar } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="grid grid-cols-1 gap-2">
	<Alert title="Errors" message="validation faild" cssClass="variant-filled-error">
		<b>test</b>
	</Alert>

	<Alert title="Warning" message="validation faild" cssClass="variant-filled-warning">
		<b>test</b>
	</Alert>

	<Alert message="validation success" cssClass="variant-filled-success">
		<b>test</b>
	</Alert>

	<Alert cssClass="variant-ringed-success">
		<h3 class="h3">Alert with a complex message</h3>
		<p>inside the Alert messsage everthing goes to the slot in the message block</p>
		<ul class="list-disc pl-5">
			<li>note 1</li>
			<li>note 2</li>
			<li>note 3</li>
		</ul>
	</Alert>

	<Alert
		title="Alert with extra button"
		message="in the slot actions you can create your own container with different acions"
		cssClass="variant-ringed-success"
	>
		<div class="flex gap-2" slot="actions">
			<button class="btn hover:text-primary-100" on:click={() => alert('edit')}>
				<Fa icon={faEdit} />
			</button>
			<button class="btn hover:text-primary-100" on:click={() => alert('something else')}>
				<Fa icon={faCableCar} />
			</button>
		</div>
	</Alert>
</div>
