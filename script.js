const Animals =     
    [
      {
        name: 'Brown Kiwi', 
        maoriname: 'Kiwi Parauri',
        namer: true,
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
        maoriname: 'Kea',
        namer: true,
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
        maoriname: 'Hoiho',
        namer: true,
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
        maoriname: 'Kākāpō',
        namer: true,
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
        maoriname: 'Whio',
        namer: true,
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
        maoriname: 'Pūkeko',
        namer: true,
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
          { text: 'Are allowed to be hunted under license' },
          { text: 'Can be aggressive, particuarly in self defence against predators' },
          { text: 'Feeds mostly on plants and occasionally various insects' },
          { text: 'Recognisable by their red, black and blue colouring' },
        ]
      },
      {
        name: 'Hectors Dolphin',
        maoriname: 'Tutumairekurai',
        namer: true,
        zoom: false,
        status: 'Nationally Vunerable',
        level: 6,
        image: 'images/hectors-dolphin-600x338.jpg',
        threats: 
        [
          { text: 'Fishing' },
          { text: 'Tourism' },
          { text: 'Diseases' },
          { text: 'Water Pollution' },
          { text: 'Boat Disturbance' },
        ],
        facts: 
        [
          { text: 'One of the smallest dolphins in the world' },
          { text: 'In the past, Maori would predict the weather based off its movements' },
          { text: 'Uses echolocation to find its food' },
          { text: 'Found in the water surrounding the South Island' },
          { text: 'Recognisable for its distinctive grey, black and white colour along with its round dorsal fin' },
        ]
      },
      {
        name: 'NZ Fur Seal',
        maoriname: 'Kekeno',
        namer: true,
        zoom: false,
        status: 'Not Threatened',
        level: 1,
        image: 'images/nz-fur-seal-600x338.jpg',
        threats: 
        [
          { text: 'There are no significant threats to the NZ Fur Seal population, as they are "Not Threatened"' },
        ],
        facts: 
        [
          { text: 'Adult males generally weigh nearly triple the weight of adult females' },
          { text: 'Feed mainly on squid and smaller fish, though can eat some slightly larger sea creatures' },
          { text: 'Underneath their fur coat is a thick layer of blubber' },
          { text: 'Spend days out at sea for food and then return to shore to rest' },
        ]
      },     
      {
        name: 'NZ Robin',
        maoriname: 'Toutouwai',
        namer: true,
        zoom: false,
        status: 'Declining',
        level: 5,
        image: 'images/nz-robin-600x338.jpg',
        threats: 
        [
          { text: 'Cats' },
          { text: 'Stoats' },
          { text: 'Rats' },
          { text: 'Possums' },
          { text: 'Deforestation' },
        ],
        facts: 
        [
          { text: 'Male Robins can sing a song for up to 30 minutes to attract a female' },
          { text: 'Feeds mainly on small bugs' },
          { text: 'Forages around in the ground and scans from perches to find its prey' },
          { text: 'Has relatively long legs' },
          { text: 'Lives in forest and scrub, generally favouring moist areas' }
        ]
      },
      {
        name: 'Chevron Skink',
        maoriname: 'Niho Taniwha',
        namer: true,
        zoom: false,
        status: 'Nationally Vunerable',
        level: 6,
        image: 'images/chevron-skink-600x338.jpg',
        threats: 
        [
          { text: 'Cats' },
          { text: 'Motor Vehicles' },
          { text: 'Rats' },
          { text: 'Pigs' },
          { text: 'Habitat Destruction' },
        ],
        facts: 
        [
          { text: 'Will grunt or squeak when its disturbed' },
          { text: 'Grows up to 30cm long, making it NZs longest lizard' },
          { text: 'Known to be a good climber' },
          { text: 'Recognisable by the teardrop marking under each eye' },
          { text: 'Very hard to find by people, because of its rarity and shyness' },
        ]
      },
      {
        name: 'Kokako',
        maoriname: 'Kōkako',
        namer: true,
        zoom: false,
        status: 'Recovering',
        level: 4,
        image: 'images/kokako-600x338.jpg',
        threats: 
        [
          { text: 'Possums' },
          { text: 'Stoats' },
          { text: 'Rats' },
          { text: 'Cats' },
          { text: 'Habitat Destruction' },

        ],
        facts: 
        [
          { text: 'Mainly feeds on fruit and leaves' },
          { text: 'Females undergo a 50 day incubation process for birth, which makes them easy targets for predators, resulting int there to be more Male Kokako than Female' },
          { text: 'Stays perched up in trees most of the time' },
          { text: 'Known for the loud haunting song it sings' },
        ]
      },
      {
        name: 'Tui',
        maoriname: 'Tūī',
        namer: true,
        zoom: false,
        status: 'Not Threatened',
        level: 1,
        image: 'images/tui-600x338.jpg',
        threats: 
        [
          { text: 'There are no significant threats to the NZ Fur Seal population, as they are "Not Threatened"' },
        ],
        facts: 
        [
          { text: 'Recognisable by the white tuft under their throat' },
          { text: 'Known to be aggresive when defending their feeding territory' },
          { text: 'Feeds on various nectar and fruits' },
          { text: 'Usually very vocal, mixing tuneful notes with coughs and grunts' },
          { text: 'Are a common bird, found throughtout most of NZ' },
        ]
      },  
    ];


Vue.component('card', {
  props: ['animal','selected','small','themer'],
  template: '#card-template'
});


const NotfoundComponent = 
{
  template: '<h1>Not found</h1>'
};


const HomeComponent = 
{
  template: '#homepage-template'
};


const CardsComponent = 
{ 
  template: '#cardspage-template',
  data: function() 
  {
    var result =
    {
      themer: true,
      selected: { animal: null},
      animals: Animals
    };
    return result; 
  }
};


const CreditsComponent = 
{
  template: '#creditspage-template'
};


const Routes = 
[
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/cards',
    component: CardsComponent,
  },
  {
    path: '/credits',
    component: CreditsComponent,
  },
  {
    path: '*',
    component: NotfoundComponent
  }
];


const Router = new VueRouter({
  routes: Routes
});


const App = new Vue({
  el: '#app',
  router: Router,
  data: 
  {
    themer: true,
    audio: null,
  },
  methods: 
  {
    changeSound() 
    {
      if (this.audio) 
      {
        this.audio.pause();
        this.audio = null;
      }
      else
      {
        this.audio = new Audio('audio/46-tui-morning-chorus.mp3');
        this.audio.play();
      }
    }
  }
});

