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
<div class="btn preset-outlined-primary-500 "></div>
<div class="btn preset-outlined-secondary-500 "></div>
<div class="btn preset-outlined-tertiary-500 "></div>
<div class="btn preset-outlined-success-500 "></div>
<div class="btn preset-outlined-warning-500 "></div>
<div class="btn preset-outlined-error-500 "></div>
<div class="btn preset-outlined-surface-500 "></div>
<div class="btn preset-tonal-primary-500 "></div>
<div class="btn preset-tonal-secondary-500 "></div>
<div class="btn preset-tonal-tertiary-500 "></div>
<div class="btn preset-tonal-success-500 "></div>
<div class="btn preset-tonal-warning-500 "></div>
<div class="btn preset-tonal-error-500 "></div>
<div class="btn preset-tonal-surface-500 "></div>
<div class="btn preset-ghost-primary-500 "></div>
<div class="btn preset-ghost-secondary-500 "></div>
<div class="btn preset-ghost-tertiary-500 "></div>
<div class="btn preset-ghost-success-500 "></div>
<div class="btn preset-ghost-warning-500 "></div>
<div class="btn preset-ghost-error-500 "></div>
<div class="btn preset-ghost-surface-500 "></div>-->

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
				<button class="btn preset-filled-{colorName}-500">{colorName}</button>
			{/each}
		</div>
		<h3 class="h3">Ringed</h3>
		<div class="grid grid-cols-7 gap-4">
			{#each colorNames as colorName}
				<button
					class="btn preset-outlined"
					class:border-primary-500={colorName === 'primary'}
					class:border-secondary-500={colorName === 'secondary'}
					class:border-tertiary-500={colorName === 'tertiary'}
					class:border-success-500={colorName === 'success'}
					class:border-warning-500={colorName === 'warning'}
					class:border-error-500={colorName === 'error'}
					class:border-surface-500={colorName === 'surface'}
					class:text-primary-700={colorName === 'primary'}
					class:text-secondary-700={colorName === 'secondary'}
					class:text-tertiary-700={colorName === 'tertiary'}
					class:text-success-700={colorName === 'success'}
					class:text-warning-700={colorName === 'warning'}
					class:text-error-700={colorName === 'error'}
					class:text-surface-700={colorName === 'surface'}
				>
					{colorName}
				</button>
			{/each}
		</div>
		<h3 class="h3">Soft</h3>
		<div class="grid grid-cols-7 gap-4">
			{#each colorNames as colorName}
				<button
					class="btn preset-tonal"
					class:bg-primary-50={colorName === 'primary'}
					class:bg-secondary-50={colorName === 'secondary'}
					class:bg-tertiary-50={colorName === 'tertiary'}
					class:bg-success-50={colorName === 'success'}
					class:bg-warning-50={colorName === 'warning'}
					class:bg-error-50={colorName === 'error'}
					class:bg-surface-50={colorName === 'surface'}
					class:text-primary-800={colorName === 'primary'}
					class:text-secondary-800={colorName === 'secondary'}
					class:text-tertiary-800={colorName === 'tertiary'}
					class:text-success-800={colorName === 'success'}
					class:text-warning-800={colorName === 'warning'}
					class:text-error-800={colorName === 'error'}
					class:text-surface-800={colorName === 'surface'}
				>
					{colorName}
				</button>
			{/each}
		</div>
		<h3 class="h3">Ghost</h3>
		<div class="grid grid-cols-7 gap-4">
			{#each colorNames as colorName}
				<button
					class="btn bg-transparent border border-transparent"
					class:text-primary-700={colorName === 'primary'}
					class:text-secondary-700={colorName === 'secondary'}
					class:text-tertiary-700={colorName === 'tertiary'}
					class:text-success-700={colorName === 'success'}
					class:text-warning-700={colorName === 'warning'}
					class:text-error-700={colorName === 'error'}
					class:text-surface-700={colorName === 'surface'}
					class:hover\:border-primary-500={colorName === 'primary'}
					class:hover\:border-secondary-500={colorName === 'secondary'}
					class:hover\:border-tertiary-500={colorName === 'tertiary'}
					class:hover\:border-success-500={colorName === 'success'}
					class:hover\:border-warning-500={colorName === 'warning'}
					class:hover\:border-error-500={colorName === 'error'}
					class:hover\:border-surface-500={colorName === 'surface'}
					class:hover\:bg-primary-50={colorName === 'primary'}
					class:hover\:bg-secondary-50={colorName === 'secondary'}
					class:hover\:bg-tertiary-50={colorName === 'tertiary'}
					class:hover\:bg-success-50={colorName === 'success'}
					class:hover\:bg-warning-50={colorName === 'warning'}
					class:hover\:bg-error-50={colorName === 'error'}
					class:hover\:bg-surface-50={colorName === 'surface'}
				>
					{colorName}
				</button>
			{/each}
		</div>
	</div>

	<h2 class="h2">Alerts</h2>
	<div class="card grid p-5 my-10 gap-5">
		<h3 class="h3">Filled</h3>
		<div class="grid grid-cols-3 gap-4">
			{#each colorNames as colorName}
				<Alert message={colorName} cssClass="preset-filled-{colorName}-500" />
			{/each}
		</div>
		<h3 class="h3">Ringed</h3>
		<div class="grid grid-cols-3 gap-4">
			{#each colorNames as colorName}
				<Alert
					message={colorName}
					cssClass={`preset-outlined
						${colorName === 'primary' ? 'border-primary-500 text-primary-700' : ''}
						${colorName === 'secondary' ? 'border-secondary-500 text-secondary-700' : ''}
						${colorName === 'tertiary' ? 'border-tertiary-500 text-tertiary-700' : ''}
						${colorName === 'success' ? 'border-success-500 text-success-700' : ''}
						${colorName === 'warning' ? 'border-warning-500 text-warning-700' : ''}
						${colorName === 'error' ? 'border-error-500 text-error-700' : ''}
						${colorName === 'surface' ? 'border-surface-500 text-surface-700' : ''}
					`}
				/>
			{/each}
		</div>
		<h3 class="h3">Soft</h3>
		<div class="grid grid-cols-3 gap-4">
			{#each colorNames as colorName}
				<Alert
					message={colorName}
					cssClass={`preset-tonal
						${colorName === 'primary' ? 'bg-primary-50 text-primary-800' : ''}
						${colorName === 'secondary' ? 'bg-secondary-50 text-secondary-800' : ''}
						${colorName === 'tertiary' ? 'bg-tertiary-50 text-tertiary-800' : ''}
						${colorName === 'success' ? 'bg-success-50 text-success-800' : ''}
						${colorName === 'warning' ? 'bg-warning-50 text-warning-800' : ''}
						${colorName === 'error' ? 'bg-error-50 text-error-800' : ''}
						${colorName === 'surface' ? 'bg-surface-50 text-surface-800' : ''}
					`}
				/>
			{/each}
		</div>
		<h3 class="h3">Ghost</h3>
		<div class="grid grid-cols-3 gap-4">
			{#each colorNames as colorName}
				<Alert
					message={colorName}
					cssClass={`bg-transparent border border-transparent
						${colorName === 'primary' ? 'text-primary-700 hover:border-primary-500 hover:bg-primary-50' : ''}
						${colorName === 'secondary' ? 'text-secondary-700 hover:border-secondary-500 hover:bg-secondary-50' : ''}
						${colorName === 'tertiary' ? 'text-tertiary-700 hover:border-tertiary-500 hover:bg-tertiary-50' : ''}
						${colorName === 'success' ? 'text-success-700 hover:border-success-500 hover:bg-success-50' : ''}
						${colorName === 'warning' ? 'text-warning-700 hover:border-warning-500 hover:bg-warning-50' : ''}
						${colorName === 'error' ? 'text-error-700 hover:border-error-500 hover:bg-error-50' : ''}
						${colorName === 'surface' ? 'text-surface-700 hover:border-surface-500 hover:bg-surface-50' : ''}
					`}
				/>
			{/each}
		</div>
	</div>
</div>
