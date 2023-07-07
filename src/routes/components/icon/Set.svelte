<script>
	import Fa from 'svelte-fa/src/fa.svelte';

	import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
	import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
	import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="grid grid-cols-2">
	<Fa icon={faAngleRight} />
	<span><b>faAngleRight</b> - fa-angle-right</span>

	<Fa icon={faAngleDown} />
	<span><b>faAngleDown</b> - fa-angle-down</span>

	<Fa icon={faAddressBook} />
	<span><b>faAddressBook</b> - fa-adress-book </span>
</div>
