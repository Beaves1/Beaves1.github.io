const App = new Vue({
  el: '#app',
  data: 
  {
    animals: 
    [
      {
        name: 'Brown Kiwi', 
        status: 'Declining',
        level: 5,
        image: 'https://assets3.thrillist.com/v1/image/2624055/size/tmg-article_tall.jpg', 
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
          { text: 'It has small wings but is flightless ' },
          { text: 'Mainly a nocturnal bird ' },
        ]
      },
    ]
  }
});

