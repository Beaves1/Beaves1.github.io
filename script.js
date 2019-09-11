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
          { text: 'It has small wings but is flightless' },
          { text: 'Mainly a nocturnal bird' },
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
          { text: 'Feeds on plants mainly, although they are known to eat human rubbish' },
          { text: 'A loud and mischevious bird' },
        ]
      },
      {
                name: 'Kea',
        zoom: false,
        status: 'Nationally Endangered',
        level: 7,
        image: 'yellow-eyed-penguin-600x338.jpg',
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
          { text: 'Recognisable for its yellow eye and yellow feathers running from each eye' },
          { text: 'Dives to depths between 40-120m to catch food' },
        ]
      }
    ]
  }
});

