Vue.component('card', {
  props: ['animal'],
  template: '#card-template'
});

const App = new Vue({
  el: '#app',
  data: 
  {
    animals: 
    [
      {
        name: 'Brown Kiwi', 
        zoom: false,
        status: 'Declining',
        level: 5,
        image: 'images/brown-kiwi-600x338.jpg', 
        threats: 
        [
          { text: 'Dogs' },
          { text: 'Stoats' },
          { text: 'Ferrets' },
          { text: 'Deforestation' },
          { text: 'Motor Vehicles' }
        ],
        facts: 
        [
          { text: 'The Kiwi are the only birds that have nostrils on the tip of their beak' },
          { text: 'Only found in the North Island' },
          { text: 'Feeds on insects mainly' },
          { text: 'Has small wings but is flightless' },
          { text: 'Mainly a nocturnal bird' },
          { text: 'Female Kiwis are both heavier and bigger than Male Kiwis' },
        ]
      },
      {
        name: 'Kea',
        zoom: false,
        status: 'Nationally Endangered',
        level: 7,
        image: 'images/kea-600x338.jpg',
        threats: 
        [
          { text: 'Lead Poisoning' },
          { text: 'Stoats' },
          { text: 'Ferrets' },
          { text: 'Dogs' },
          { text: 'Motor Vehicles' }
        ],
        facts: 
        [
          { text: 'Known for their intelligence and curiosity' },
          { text: 'Most wild Kea are estimated to live for 5 years' },
          { text: 'Feeds on plants mainly, although they are known to eat rubbish' },
          { text: 'A loud and mischevious bird' },
          { text: 'Named Kea, after the sound of its call' },
        ]
      },
      {
        name: 'Yellow-Eyed Penguin',
        zoom: false,
        status: 'Nationally Endangered',
        level: 7,
        image: 'images/yellow-eyed-penguin-600x338.jpg',
        threats: 
        [
          { text: 'Habitat Loss' },
          { text: 'Diseases' },
          { text: 'Fishing Nets' },
          { text: 'Dogs' },
          { text: 'Human Disturbance' }
        ],
        facts: 
        [
          { text: 'Fish makes up 90% of its diet' },
          { text: 'Weighs 5-6 kilograms and has a height of 65 centimetres' },
          { text: 'Known for its yellow eye and yellow feathers running from each eye' },
          { text: 'Dives to depths between 40-120m to catch food' },
          { text: 'Moult all their feathers yearly' },
        ]
      },
      {
        name: 'Kakapo',
        zoom: false,
        status: 'Nationally Critical',
        level: 8,
        image: 'images/kakapo-600x338.jpg',
        threats: 
        [
          { text: 'Cats' },
          { text: 'Diseases' },
          { text: 'Stoats' },
          { text: 'Habitat Loss' },
          { text: 'Genetic Inbreeding' }
        ],
        facts: 
        [
          { text: 'Can live for up to 90 years' },
          { text: 'The only flightless parrot in the world' },
          { text: 'Since 1989 intensive efforts have been set up to protect the species, with remaining Kakapo being moved to predator free islands' },
          { text: 'Freeze when startled, making them easy to catch for predators' },
        ]
      },
      {
        name: 'Blue Duck',
        zoom: false,
        status: 'Nationally Vunerable',
        level: 6,
        image: 'images/blue-duck-600x338.jpg',
        threats: 
        [
          { text: 'Habitat Loss' },
          { text: 'Human Disturbance' },
          { text: 'Stoats' },
          { text: 'Rats' },
          { text: 'Possums' }
        ],
        facts: 
        [
          { text: 'Very territorial and mostly stay in the same area of land for their entire life' },
          { text: 'Requires clean, fast flowing rivers to live in' },
          { text: 'Is featured on the $10 note' },
          { text: 'Camoflagues well in water because of its blue and grey feathers' },
          { text: 'Feeds on larvae and other aquatic insects' },
        ]
      },
      {
        name: 'Pukeko',
        zoom: false,
        status: 'Not Threatened',
        level: 1,
        image: 'images/pukeko-600x338.jpg',
        threats: 
        [
          { text: 'There are no significant threats to the Pukeko population, as they are "Not Threatened"' },
        ],
        facts: 
        [
          { text: 'Are capable at flying and are strong swimmers' },
          { text: 'Are allowed to be hunted under license, because they are common' },
          { text: 'Can be aggressive, particuarly in self defence against predators' },
          { text: 'Feeds mostly on plants and occasionally various insects' },
          { text: 'Recognisable by their red, black and blue colouring' },
        ]
      },
    ]
  }
});

