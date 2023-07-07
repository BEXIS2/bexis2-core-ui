<script>
	import Alert from '$lib/components/page/Alert.svelte';

	$: colorStrength = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
	$: colorNames = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'surface'];
</script>

<div class="p-5">
	<h1>Bexis 2 Color Theme</h1>

	<h2 class="h2">Color overview</h2>
	<div class="card p-5 my-10">
		{#if colorStrength && colorNames}
			{#each colorNames as colorName}
				<!--hack to load colors-->
				<!-- <div class="bg-primary-50 bg-primary-100 bg-primary-200 bg-primary-300 bg-primary-400 bg-primary-500 bg-primary-600 bg-primary-700 bg-primary-800 bg-primary-900 hidden">test</div>
<div class="bg-secondary-50 bg-secondary-100 bg-secondary-200 bg-secondary-300 bg-secondary-400 bg-secondary-500 bg-secondary-600 bg-secondary-700 bg-secondary-800 bg-secondary-900 hidden">test</div>
<div class="bg-tertiary-50 bg-tertiary-100 bg-tertiary-200 bg-tertiary-300 bg-tertiary-400 bg-tertiary-500 bg-tertiary-600 bg-tertiary-700 bg-tertiary-800 bg-tertiary-900 hidden">test</div>
<div class="bg-success-50 bg-success-100 bg-success-200 bg-success-300 bg-success-400 bg-success-500 bg-success-600 bg-success-700 bg-success-800 bg-success-900 hidden">test</div>
<div class="bg-warning-50 bg-warning-100 bg-warning-200 bg-warning-300 bg-warning-400 bg-warning-500 bg-warning-600 bg-warning-700 bg-warning-800 bg-warning-900 hidden">test</div>
<div class="bg-error-50 bg-error-100 bg-error-200 bg-error-300 bg-error-400 bg-error-500 bg-error-600 bg-error-700 bg-error-800 bg-error-900 hidden">test</div>
<div class="bg-surface-50 bg-surface-100 bg-surface-200 bg-surface-300 bg-surface-400 bg-surface-500 bg-surface-600 bg-surface-700 bg-surface-800 bg-surface-900 hidden">test</div>
<div class="variant-soft-secondary">secondary</div>
<div class="btn variant-ringed-primary "></div>
<div class="btn variant-ringed-secondary "></div>
<div class="btn variant-ringed-tertiary "></div>
<div class="btn variant-ringed-success "></div>
<div class="btn variant-ringed-warning "></div>
<div class="btn variant-ringed-error "></div>
<div class="btn variant-ringed-surface "></div>
<div class="btn variant-soft-primary "></div>
<div class="btn variant-soft-secondary "></div>
<div class="btn variant-soft-tertiary "></div>
<div class="btn variant-soft-success "></div>
<div class="btn variant-soft-warning "></div>
<div class="btn variant-soft-error "></div>
<div class="btn variant-soft-surface "></div>
<div class="btn variant-ghost-primary "></div>
<div class="btn variant-ghost-secondary "></div>
<div class="btn variant-ghost-tertiary "></div>
<div class="btn variant-ghost-success "></div>
<div class="btn variant-ghost-warning "></div>
<div class="btn variant-ghost-error "></div>
<div class="btn variant-ghost-surface "></div>-->

				<div class="py-2">
					<h3>{colorName}</h3>
					<div class="grid grid-cols-11 gap-0">
						{#each colorStrength as cs}
							<div class="grid grid-rows-[1fr_40px] text-center">
								<div class="text-surface-700 dark:text-surface-300 text-sm">{cs}</div>
								<div class="bg-black/5 dark:bg-white/5">
									<div class="h-full flex justify-center items-center bg-{colorName}-{cs}" />
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		{/if}
	</div>

	<h2 class="h2">Buttons</h2>

	<div class="card grid p-5 my-10 gap-5">
		<h3 class="h3">Filled</h3>
		<div class="grid grid-cols-7 gap-4">
			{#each colorNames as colorName}
				<button class="btn variant-filled-{colorName}">{colorName}</button>
			{/each}
		</div>
		<h3 class="h3">Ringed</h3>
		<div class="grid grid-cols-7 gap-4">
			{#each colorNames as colorName}
				<button class="btn variant-ringed-{colorName}">{colorName}</button>
			{/each}
		</div>
		<h3 class="h3">Soft</h3>
		<div class="grid grid-cols-7 gap-4">
			{#each colorNames as colorName}
				<button class="btn variant-soft-{colorName}">{colorName}</button>
			{/each}
		</div>
		<h3 class="h3">Ghost</h3>
		<div class="grid grid-cols-7 gap-4">
			{#each colorNames as colorName}
				<button class="btn variant-ghost-{colorName}">{colorName}</button>
			{/each}
		</div>
	</div>

	<h2 class="h2">Alerts</h2>
	<div class="card grid p-5 my-10 gap-5">
		<h3 class="h3">Filled</h3>
		<div class="grid grid-cols-3 gap-4">
			{#each colorNames as colorName}
				<Alert message={colorName} cssClass="variant-filled-{colorName}" />
			{/each}
		</div>
		<h3 class="h3">Ringed</h3>
		<div class="grid grid-cols-3 gap-4">
			{#each colorNames as colorName}
				<Alert message={colorName} cssClass="variant-ringed-{colorName}" />
			{/each}
		</div>
		<h3 class="h3">Soft</h3>
		<div class="grid grid-cols-3 gap-4">
			{#each colorNames as colorName}
				<Alert message={colorName} cssClass="variant-soft-{colorName}" />
			{/each}
		</div>
		<h3 class="h3">Ghost</h3>
		<div class="grid grid-cols-3 gap-4">
			{#each colorNames as colorName}
				<Alert message={colorName} cssClass="variant-ghost-{colorName}" />
			{/each}
		</div>
	</div>
</div>
