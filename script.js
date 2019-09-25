Vue.component('card', {
  props: ['animal', 'selected', 'small'],
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
        this.audio = new Audio('audio/46-tui-morning-chorus-edited.mp3');
        this.audio.play();
      }
    }
  }
});

