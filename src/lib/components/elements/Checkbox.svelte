<script>
	const people = [
		{ id: 1, name: 'Passport' },
		{ id: 2, name: 'Flight Ticket' },
		{ id: 3, name: 'COVID-19 Vaccine' },
		{ id: 4, name: 'Visa' }
	];
</script>

<fieldset>
	<legend class="text-lg font-medium text-gray-900">Pax 1: John Doe</legend>
	<div class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
		{#each people as person, personIdx}
			<div class="relative flex items-start py-4">
				<div class="min-w-0 flex-1 text-sm">
					<label for="person-{person.id}" class="font-medium text-gray-700 select-none"
						>{person.name}</label
					>
				</div>
				<div class="ml-3 flex items-center h-5">
					<input
						id="person-{person.id}"
						name="person-{person.id}"
						type="checkbox"
						class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
					/>
				</div>
			</div>
		{/each}
	</div>
</fieldset>
