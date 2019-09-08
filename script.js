const App = new Vue({
  el: '#app',
  data: {
    name: 'Brown Kiwi', 
    level: 'Status Level 5: Declining',
    meterclass: 'meter level5',
    threats: [
      { text: 'Dogs' },
      { text: 'Stoats' },
      { text: 'Ferrets' },
      { text: 'Deforestation' },
      { text: 'Motor Vehicles' }
    ],
    facts: [
      { text: 'The Kiwi are the only birds that have nostrils on the tip of their beak' },
      { text: 'Only found in the North Island' },
      { text: 'Feeds on insects mainly' },
      { text: 'It has small wings but is flightless ' },
      { text: 'Mainly a nocturnal bird ' },
    ]
  },
});

