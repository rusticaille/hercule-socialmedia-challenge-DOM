console.log('test 1...2...1...2');

const exo = {

  hercule : {
    name : 'Hercule',
    job : 'demi-dieu', 
    age : 35,
    departement: 75,
    arm : 60.5,
    inRelationship : 'oui'
  },


  herculeFriends : ['Jupiter', 'Junon', 'Alcmène' , 'Déjanire'],

  init: function (){
    base.fillProfil(exo.hercule);
    base.printFriends(exo.herculeFriends);
    base.setBestFriend(exo.herculeFriends[0]);
    exo.title();
    exo.herculeLabors();
    exo.herculeAvailability();
    exo.pseudo();
    exo.toggleMenu();
    exo.sendMessage();
    exo.voteForHercule();
    exo.showActivities();
  },

  title: function(){
    const titre = document.createElement('h1');
    titre.classList.add('banner__title');
    titre.textContent = 'Vous consultez le profil de Hercule';
    const header = document.getElementById('header-banner');
    header.appendChild(titre);
    console.log(titre);
  },

  herculeLabors: function(){
    for(iWork = 0; iWork < 11; iWork++){
      base.displayWork(iWork);
    }
  },

  herculeAvailability: function(){
    let actualHour = base.getHour();
    console.log(actualHour);
    let availableHour = document.getElementById('availability');
    if(actualHour < 8 || actualHour > 20){
      availableHour.textContent = 'Indisponible';
      availableHour.classList.add('off');
    }
    else {
      availableHour.textContent = 'Frais et dispo !';
    }
  },

  pseudo: function(){
    function avatar (firstName, zipCode){
      return(firstName + ' du ' + zipCode);
    }
        
    let profilName = document.getElementById('profil-name');
    profilName.textContent = avatar(exo.hercule.name, exo.hercule.departement);
  },

  toggleMenu: function(){
    let menu = document.getElementById('menu-toggler');
    let headerBanner = document.getElementById('header-banner');

    function callbackMenu() {
      if(headerBanner.classList.contains('banner--open')){
        headerBanner.classList.remove('banner--open')
      }
      else{
        headerBanner.classList.add('banner--open')
      }

    };
    menu.addEventListener('click', callbackMenu);
  },

  sendMessage: function(){
    let contact = document.getElementById('contact');
    console.log(contact);

    function callbackContact(evt){
      console.log(evt);
      evt.preventDefault();
      alert('Hercule ne souhaite pas être dérangé');
    };


    contact.addEventListener('submit', callbackContact);
  },

  voteForHercule: function(){
    let votes = base.vote;
    console.log(votes);

    //Hercule
    let herculePopularity = document.getElementById('trends-hercule');
    let herculePurcentage = herculePopularity.querySelector('p');
    let herculePurcentageCalc = (Math.round(base.vote.hercule / (base.vote.hercule + base.vote.cesar) *100));
    herculePurcentage.textContent = (herculePurcentageCalc + '%');

    let herculeProgressBar = herculePopularity.querySelector('div');
    herculeProgressBar.style.width = herculePurcentageCalc + '%';

    //Cesar
    let cesarPopularity = document.getElementById('trends-cesar');
    let cesarPurcentage = cesarPopularity.querySelector('p');
    cesarPurcentageCalc = (Math.round(base.vote.cesar / (base.vote.hercule + base.vote.cesar) *100));
    cesarPurcentage.textContent = (cesarPurcentageCalc + '%');

    let cesarProgressBar = cesarPopularity.querySelector('div');
    cesarProgressBar.style.width = cesarPurcentageCalc + '%';
  },

  showActivities: function(){
    let activities = document.getElementById('activities');
    console.log(activities);
    if (base.activities.finished === true || base.activities.author === 'Hercule'){
      activities.classList.remove('hidden');
    }
  }
}

document.addEventListener('DOMContentLoaded', exo.init);
