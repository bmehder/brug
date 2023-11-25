import { quadIn } from 'svelte/easing'

/** @type {import('./$types').PageLoad} */
export async function load() {
	return {
		stats: [
			{
				startingNumber: 0,
				endingNumber: 2_000_000,
				beforeNumber: '',
				afterNumber: '',
				tweenOptions: {
					duration: 2_000,
					easing: quadIn,
				},
				text: 'Strawberries at Wimbledon each year',
			},
			{
				startingNumber: 0,
				endingNumber: 6_000,
				beforeNumber: '',
				afterNumber: '',
				tweenOptions: {
					duration: 2_000,
					easing: quadIn,
				},
				text: 'Annual pillow-related injuries in the US',
			},
			{
				startingNumber: 0,
				endingNumber: 50,
				beforeNumber: '',
				afterNumber: '%',
				tweenOptions: {
					duration: 2_000,
					easing: quadIn,
				},
				text: 'Of people sleep on their side',
			},
		],
		timeline: [
			{
				title: 'French Grand Prix',
				date: '1901',
				content:
					'The first use of the words grand prix to describe a race, the French Grand Prix at Le Mans.',
			},
			{
				title: 'Formation of FIA',
				date: '1904',
				content:
					"The formation of the Fédération Internationale de l'Automobile (FIA), a non-profit association established to represent the interests of motoring organisations and motor car users.",
			},
			{
				title: 'Qualifying',
				date: '1933',
				content:
					'Starting positions on the grid were decided by qualifying times for the first time at the Monaco Grand Prix.',
			},
			{
				title: "World Drivers' Championship Established",
				date: '1935',
				content:
					"A number of meetings were held with a view to establishing a world drivers' championship; these were shelved at the outbreak of World War Two.",
			},
			{
				title: "World Drivers' Championship Formalised",
				date: '1946',
				content:
					"World drivers' championship formalised. It was to take three more years before the first championship race, although there were races under F1 regulations from this year.",
			},
			{
				title: 'British Grand Prix',
				date: '1950',
				content:
					"The launch of the drivers' world championship with the first race at the British Grand Prix at Silverstone on May 13. Although there were 22 non-championship races that year, only six counted towards the title. The first official F1 race, a non-championship event at Pau, was held the previous month.",
			},
			{
				title: 'Formula Two Regulations',
				date: '1952',
				content:
					"The drivers' championship was run to Formula Two regulations because of concerns about the number of F1 cars available. This continued through the 1953 season as well.",
			},
			{
				title: 'Argentina Grand Prix',
				date: '1953',
				content: 'Argentina hosted the first championship grand prix outside Europe.',
			},
		],
		tabItems: [
			{
				heading: 'Juan',
				content:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, error. Cumque optio ex molestias, sit vel quis aliquam quaerat vero saepe doloribus ipsa laboriosam quos voluptatum. Molestias architecto aut odit quos amet. Quaerat, error. Cumque optio ex molestias. Quaerat, error.',
			},
			{
				heading: 'Won',
				content:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit excepturi voluptatem quisquam distinctio, vel facilis perspiciatis dolor libero aliquid sequi quos earum ab pariatur, minus eius rem delectus aspernatur voluptates odio inventore. Excepturi labore vel eaque pariatur quos in voluptatum reprehenderit facere?',
			},
			{
				heading: 'One',
				content:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia odio accusamus ut, esse architecto nemo laboriosam tempore accusantium magnam aut adipisci quis? Culpa, vero animi officia sunt eius, saepe commodi voluptas nobis, eum dolore cum in numquam repellat aliquid. Velit amet laudantium sequi corporis similique aspernatur culpa eaque ipsa fugit ea. Minus.',
			},
		],
	}
}
