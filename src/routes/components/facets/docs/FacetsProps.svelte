<div class="grid gap-5">
	<div class="grid gap-2" id="facetsConfig">
		<div class="italic div">Underlined attributes are <strong>required</strong>.</div>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic underline">groups:</div>
			<div class="font-bold">FacetGroup</div>
		</div>

		<p class="text-xl pl-10">
			Key value pairs where the key is the group name and the value is an array of possible choices.
		</p>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic underline">selected:</div>
			<div class="font-bold">FacetGroup</div>
		</div>

		<p class="text-xl pl-10">
			An object with keys matching the keys in the groups object with selected options for each key.
		</p>
		<p class="text-xl pl-10">
			Binding to this parameters allows the parent component to control the selected items in the
			facets.
		</p>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">selectedGroups:</div>
			<div class="font-bold">{`{[key: string]: boolean}`}</div>
		</div>

		<p class="text-xl pl-10">
			An object with keys matching the keys in the groups object with a boolean value indicated if
			that group was selected or not.
		</p>
		<p class="text-xl pl-10">
			Binding to this parameters allows the parent component to control the selected groups in the
			facets.
		</p>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">open:</div>
			<div class="font-bold">boolean</div>
		</div>

		<p class="text-xl pl-10">
			Control whether the facets are open or closed. <code
				class="!text-xl bg-red-100 dark:bg-red-400/30 rounded-md p-0.5 text-red-500">false</code
			> by default.
		</p>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">showAll:</div>
			<div class="font-bold">boolean</div>
		</div>

		<p class="text-xl pl-10">
			Control whether all the facet options are displayed in UI. <code
				class="!text-xl bg-red-100 dark:bg-red-400/30 rounded-md p-0.5 text-red-500">false</code
			>
			by default. If set to
			<code class="!text-xl bg-red-100 dark:bg-red-400/30 rounded-md p-0.5 text-red-500">false</code
			> and the number of options is greater than 5, the remaining options will be displayed in a modal.
		</p>
	</div>

	<div class="items-center">
		<div class="flex gap-2">
			<div class="italic">groupSelection:</div>
			<div class="font-bold">boolean</div>
		</div>

		<p class="text-xl pl-10">
			Control whether the facet groups can be selected. <code
				class="!text-xl bg-red-100 dark:bg-red-400/30 rounded-md p-0.5 text-red-500">false</code
			> by default.
		</p>
	</div>
</div>
