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
          { text: 'It has small wings but is flightless' },
          { text: 'Mainly a nocturnal bird' },
        ]
      },
      {
        name: 'Kea',
        status: 'Nationally Endangered',
        level: 7,
        image: "https://cdn.pixabay.com/photo/2017/03/12/23/31/kea-2138420_960_720.jpg",
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
          { text: 'Kea are known well for their intelligence and curiosity' },
          { text: 'Most wild Kea are estimated to live for 5 years' },
          { text: 'Feeds on plants mainly, although they are known to eat human rubbish' },
          { text: 'A loud and mischevious bird' },
        ]
      }
    ]
  }
});

