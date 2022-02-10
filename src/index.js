import './styles.css';
import Ingredients from './images/ingredients.jpg';
import Chrain from './images/chrain.jpg';
import BagelAvocado from './images/bagel_avocado.jpg';
import Gumbo from './images/gumbo.jpg';
import ShortRibs from './images/shortribs.jpg';
import Pie from './images/pie.jpg'

class Page {
  constructor (bodyTopper, contentWrapper, pageClass, images) {
    this.bodyTopper = bodyTopper;
    this.contentWrapper = contentWrapper;
    this.contentWrapper.classList = pageClass;
    this.images = images;
  };

  homePageBody () {
    this.contentWrapper.innerHTML = '';

    const pageTitle = document.createElement('h2');
    const cooking = document.createElement('h3');
    cooking.innerHTML = 'Click on Recipes to get cooking!'
    const headerImage = new Image();

    pageTitle.textContent = this.bodyTopper;
    headerImage.src = this.images;
    headerImage.classList = 'home-image';

    this.contentWrapper.appendChild(pageTitle);
    this.contentWrapper.appendChild(cooking);
    this.contentWrapper.appendChild(headerImage);
  };

  contactPageBody () {
    this.contentWrapper.innerHTML = '';

    const pageTitle = document.createElement('h2');
    const introContainer = document.createElement('div');
    const intro = document.createElement('p');
    const headerImage = new Image();

    pageTitle.textContent = this.bodyTopper;
    intro.textContent = 'Blain and Christina (Chrain) have been living together for nearly three years now.  Both are computer programmers by day, but at night, and on weekends, they specialize as cooks with many different specialties.  When not at work you can find them out seeing live music, playing video games with friends, or in the kitchen making the delicious food on this site, and much more when they aren\'t writing music or programs!';
    headerImage.src = this.images;
    headerImage.classList = 'home-image';
    introContainer.classList = 'intro-container'
    
    introContainer.appendChild(intro);
    this.contentWrapper.appendChild(pageTitle);
    this.contentWrapper.appendChild(headerImage);
    this.contentWrapper.appendChild(introContainer);
  };

  recipesPageBody () {
    const recipeList = this.images;
    this.contentWrapper.innerHTML = '';

    const pageTitle = document.createElement('h2');
    const cooking = document.createElement('h3');
    cooking.innerHTML = 'Click on pictures for detailed recipe!'
    

    pageTitle.textContent = this.bodyTopper;

    this.contentWrapper.appendChild(pageTitle);
    this.contentWrapper.appendChild(cooking);
    let recipesDiv = document.createElement('div');

    for(let i = 0; i < recipeList.length; i++) {
      let individualRecipe = document.createElement('div')
      let recipeName = document.createElement('h3')
      let recipePic = new Image()

      recipesDiv.classList = 'recipe';
      recipePic.classList = 'recipe-image';
      recipePic.addEventListener('click', displayRecipePage, false);

      recipeName.innerText = recipeList[i].name;
      recipePic.src = recipeList[i].picture;
      recipePic.id = recipeList[i].id;

      individualRecipe.appendChild(recipeName);
      individualRecipe.appendChild(recipePic);
      recipesDiv.appendChild(individualRecipe)
      this.contentWrapper.appendChild(recipesDiv);
    }

  };
};

const displayRecipePage = function (page) {
  page = this.id;
  let pageBody = document.querySelector('.recipe-page');
  switch (page) {
    case '1':
    pageBody.innerHTML = '';
    pageBody.innerHTML = `<h1>Smoked Salmon Bagel and Avocado!</h1><br><img src=${BagelAvocado} class='recipe-image'>`
    pageBody.classList = 'recipe-page'
    break;
    case '2':
    pageBody.innerHTML = '';
    pageBody.innerHTML = `<h1>Gumbo</h1><br><img src=${Gumbo} class='recipe-image'>`
    pageBody.classList = 'recipe-page'
    break;
    case '3':
    pageBody.innerHTML = '';
    pageBody.innerHTML = `<h1>Pecan Pie!</h1><br><img src=${Pie} class='recipe-image'>`
    pageBody.classList = 'recipe-page'
    break;
    case '4':
    pageBody.innerHTML = '';
    pageBody.innerHTML = `<h1>Gochujang Short Ribs!</h1><br><img src=${ShortRibs} class='recipe-image'>`
    pageBody.classList = 'recipe-page'
    break;
  }
}

const headerContent = (() => {
  const createHeader = (() => {
    const headerDiv = document.createElement('div');
    const siteTitle = document.createElement('h1');
    const pageContent = document.getElementById('content');
    const navContainer = document.createElement('div');
    const navBar = document.createElement('ul');
    const home = document.createElement('li');
    const recipes = document.createElement('li');
    const contact = document.createElement('li');
    const lowerHeader = document.createElement('div');

    siteTitle.innerText = 'Chrain\'s Home Recipes';
    home.innerText = 'Home';
    recipes.innerText = 'Recipes';
    contact.innerText = 'Contact';

    headerDiv.classList = 'header';
    navBar.classList = 'navbar';
    lowerHeader.classList = 'lowerheader';
    home.classList = 'current-page';

    headerDiv.appendChild(siteTitle);
    headerDiv.appendChild(navContainer);
    headerDiv.appendChild(lowerHeader);
    navContainer.appendChild(navBar);
    navBar.appendChild(home);
    navBar.appendChild(recipes);
    navBar.appendChild(contact);
    pageContent.appendChild(headerDiv);
  })();
  let pageBody = document.createElement('div')
  document.body.appendChild(pageBody);
  let homePage = new Page('Welcome to Chrain\'s Home Recipes!', pageBody, 'home-page', Ingredients);
  homePage.homePageBody();

})();



const mainContent = function () {
  let pageBody = document.querySelector('.home-page');
  document.body.appendChild(pageBody);
  let recipes = [
    {name: 'Salmon Bagel with Avocado', picture: BagelAvocado, id: 1},
    {name: 'Gumbo', picture: Gumbo, id: 2},
    {name: 'Pecan Pie', picture: Pie, id: 3},
    {name: 'Gochujang Shortribs', picture: ShortRibs, id: 4},
    {name: 'Salmon Bagel with Avocado', picture: BagelAvocado, id: 1},
    {name: 'Gumbo', picture: Gumbo, id: 2},
    {name: 'Pecan Pie', picture: Pie, id: 3},
    {name: 'Gochujang Shortribs', picture: ShortRibs, id: 4}
  ]

  let homePage = function () {
    let homePage = new Page('Welcome to Chrain\'s Home Recipes!', pageBody, 'home-page', Ingredients);
    homePage.homePageBody();
  };

  let recipesPage = function () {
    let contactPage = new Page('The real star of the show. . .the FOOD!', pageBody, 'recipe-page', recipes);
    contactPage.recipesPageBody();
  };

  let contactPage = function () {
    let contactPage = new Page('Let\'s meet our cooks!!', pageBody, 'home-page', Chrain);
    contactPage.contactPageBody();
  };

  return {homePage, recipesPage, contactPage};
};

const currentPage = mainContent();
const links = document.querySelectorAll('li');

const switchPages = function () {
  links.forEach((link) => {
    link.classList.remove('current-page');
  });
  this.classList.add('current-page');
  switch (this.textContent) {
    case 'Home':
      currentPage.homePage();
      break;
    case 'Recipes':
      currentPage.recipesPage();
      break;
    case 'Contact':
      currentPage.contactPage();
      break;
  };
};

links.forEach((link) => {
  link.addEventListener('click', switchPages.bind(link));
});
