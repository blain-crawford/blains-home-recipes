import './styles.css';
import Ingredients from './images/ingredients.jpg'

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
    const headerImage = new Image();

    pageTitle.textContent = this.bodyTopper;
    headerImage.src = this.images;
    headerImage.classList = 'home-image';

    this.contentWrapper.appendChild(pageTitle);
    this.contentWrapper.appendChild(headerImage);
  };
};

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

    siteTitle.innerText = 'Blain\'s Home Recipes';
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
  let homePage = new Page('Welcome to Blain\'s Home Recipes!', pageBody, 'home-page', Ingredients);
  homePage.homePageBody();

})();



const mainContent = function () {
  let pageBody = document.querySelector('.home-page');
  document.body.appendChild(pageBody);

  let homePage = function () {
    let homePage = new Page('Welcome to Blain\'s Home Recipes!', pageBody, 'home-page', Ingredients);
    homePage.homePageBody();
  };

  let recipesPage = function () {
    pageBody.innerHTML = ''
    const h1 = document.createElement('h1');
    h1.textContent = 'Recipes Page!';
    pageBody.appendChild(h1)
  };

  let contactPage = function () {
    pageBody.innerHTML = ''
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Page!';
    pageBody.appendChild(h1)
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
