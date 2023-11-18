import { quadIn } from 'svelte/easing'

export const stats = [
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
]

export const timeline = [
	{
		title: 'Occasion 1',
		date: '12 Dec. 2023',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo.',
	},
	{
		title: 'Occasion 2',
		date: '13 Dec. 2023',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo.',
	},
	{
		title: 'Occasion 3',
		date: '14 Dec. 2023',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo.',
	},
	{
		title: 'Occasion 4',
		date: '15 Dec. 2023',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo.',
	},
	{
		title: 'Occasion 5',
		date: '16 Dec. 2023',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo.',
	},
	{
		title: 'Occasion 6',
		date: '17 Dec. 2023',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo.',
	},
	{
		title: 'Occasion 7',
		date: '18 Dec. 2023',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo.',
	},
	{
		title: 'Occasion 8',
		date: '19 Dec. 2023',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, explicabo.',
	},
]
