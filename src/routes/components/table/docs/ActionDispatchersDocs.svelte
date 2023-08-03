<div class="grid gap-5">
	<div class="grid gap-2" id="actionDispatchersDocs">
		<div class="flex gap-3 h3">
			<h3 class="italic font-semibold">on:action</h3>
			<h3 class="font-semibold">{`(action: CustomEvent<any>) => {}`}</h3>
		</div>

		<p class="text-xl underline">
			To dispatch actions and listen to dispatchers you need to create a table with your own <code
				class="!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500">optionsComponent</code
			> component.
		</p>
		<div class="mt-5">
			<p class="text-xl">
				Every <code class="!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"
					>optionsComponent</code
				> will get 2 props:
			</p>
			<div class="items-center mt-2">
				<div class="flex gap-2">
					<div class="italic">row:</div>
					<div class="font-bold">Object</div>
				</div>
				<p class="text-xl pl-10">
					The current row in the table. In other words, a single object from the data store.
				</p>
			</div>
			<div class="items-center mt-2">
				<div class="flex gap-2">
					<div class="italic">dispatchFn:</div>
					<div class="font-bold">{`(obj: any) => dispatch('action', obj)`}</div>
				</div>
				<p class="text-xl pl-10">
					A function that takes an object and dispatches an action with the name <code
						class="!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500">action</code
					>. The passed object is accessible by the parent component through the
					<code class="!text-xl bg-tertiary-300 rounded-md p-0.5 text-primary-500"
						>action.detail</code
					> property.
				</p>
			</div>
		</div>
	</div>
</div>
