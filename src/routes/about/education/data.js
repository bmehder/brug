import { quadIn } from 'svelte/easing'

export default [
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
