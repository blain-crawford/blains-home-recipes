import { recipes } from './recipes';
import './styles.css';
import Ingredients from './images/ingredients.jpg';
import Chrain from './images/chrain.jpg';

class Page {
  constructor(bodyTopper, contentWrapper, pageClass, images) {
    this.bodyTopper = bodyTopper;
    this.contentWrapper = contentWrapper;
    this.contentWrapper.classList = pageClass;
    this.images = images;
  }
  /**
   * generate home page
   */
  homePageBody() {
    this.contentWrapper.innerHTML = '';

    const pageTitle = document.createElement('h2');
    const cooking = document.createElement('h3');
    cooking.innerHTML = 'Click on Recipes to get cooking!';
    const headerImage = new Image();

    pageTitle.textContent = this.bodyTopper;
    headerImage.src = this.images;
    headerImage.classList = 'home-image';

    this.contentWrapper.appendChild(pageTitle);
    this.contentWrapper.appendChild(cooking);
    this.contentWrapper.appendChild(headerImage);
  }
  /**
   * generate cooks page
   */
  cookPageBody() {
    this.contentWrapper.innerHTML = '';

    const pageTitle = document.createElement('h2');
    const introContainer = document.createElement('div');
    const intro = document.createElement('p');
    const headerImage = new Image();

    pageTitle.textContent = this.bodyTopper;
    intro.textContent =
      'Blain and Christina (Chrain) have been living together for nearly three years now.  Both are computer programmers and musicians by day, but at night, and on weekends, they specialize as cooks with many different specialties.  When not at work you can find them out seeing live music, playing video games with friends, or in the kitchen making the delicious food on this site, and much more!';
    headerImage.src = this.images;
    headerImage.classList = 'home-image';
    introContainer.classList = 'intro-container';

    introContainer.appendChild(intro);
    this.contentWrapper.appendChild(pageTitle);
    this.contentWrapper.appendChild(headerImage);
    this.contentWrapper.appendChild(introContainer);
  }
  /**
   * generate page with all recipes
   */
  recipesPageBody() {
    const recipeList = this.images;
    this.contentWrapper.innerHTML = '';

    const pageTitle = document.createElement('h2');
    const cooking = document.createElement('h3');
    cooking.innerHTML = 'Click on pictures for detailed recipe!';

    pageTitle.textContent = this.bodyTopper;

    this.contentWrapper.appendChild(pageTitle);
    this.contentWrapper.appendChild(cooking);
    const recipesDiv = document.createElement('div');

    for (let i = 0; i < recipeList.length; i++) {
      const individualRecipe = document.createElement('div');
      const recipeName = document.createElement('h3');
      const recipePic = new Image();

      recipesDiv.classList = 'recipe';
      recipePic.classList = 'recipe-image';
      recipePic.addEventListener('click', displayRecipePage, false);

      recipeName.innerText = recipeList[i].name;
      recipePic.src = recipeList[i].picture;
      recipePic.id = recipeList[i].id;

      individualRecipe.appendChild(recipeName);
      individualRecipe.appendChild(recipePic);
      recipesDiv.appendChild(individualRecipe);
      this.contentWrapper.appendChild(recipesDiv);
    }
  }
  /**
   * geerate page and take in ingredients and instructions for individual recipes
   * @param {*} ingredients 
   * @param {*} instructions 
   */
  individualRecipePageBody(ingredients, instructions) {
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.contentWrapper.innerHTML = '';

    const instructionsAndIngredients = document.createElement('div');
    const pageTitle = document.createElement('h2');
    const headerImage = new Image();
    const ingredientList = document.createElement('ul');
    const ingredientDiv = document.createElement('div');
    const instructionsList = document.createElement('div');
    const ingredientsHeader = document.createElement('h2');
    const instructionsHeader = document.createElement('h2');

    pageTitle.innerText = this.bodyTopper;
    ingredientsHeader.innerText = 'Ingredients';
    instructionsHeader.innerText = 'Instructions';

    headerImage.src = this.images;
    headerImage.classList = 'individual-recipe-image';
    ingredientDiv.classList = 'ingredient-div';
    instructionsAndIngredients.classList = 'instructions-and-ingredients';
    instructionsList.classList = 'instructions';

    instructionsList.appendChild(instructionsHeader);
    this.contentWrapper.appendChild(pageTitle);
    this.contentWrapper.appendChild(headerImage);
    this.contentWrapper.appendChild(instructionsAndIngredients);

    for (let i = 0; i < this.ingredients.length; i++) {
      const ingredientListItem = document.createElement('li');
      ingredientListItem.innerText = this.ingredients[i];
      ingredientList.appendChild(ingredientListItem);
    }

    for (let i = 0; i < this.instructions.length; i++) {
      const instructionListItem = document.createElement('div');
      instructionListItem.innerText = this.instructions[i];
      instructionsList.appendChild(instructionListItem);
    }
    
    ingredientDiv.appendChild(ingredientsHeader);
    ingredientDiv.appendChild(ingredientList);
    instructionsAndIngredients.appendChild(ingredientDiv);
    instructionsAndIngredients.appendChild(instructionsList);
  }
}

/**
 * auto run to create header and navbar for each page
 */
const headerContent = (() => {
  const createHeader = (() => {
    const headerDiv = document.createElement('div');
    const siteTitle = document.createElement('h1');
    const pageContent = document.getElementById('content');
    const navContainer = document.createElement('div');
    const navBar = document.createElement('ul');
    const home = document.createElement('li');
    const recipes = document.createElement('li');
    const cook = document.createElement('li');
    const lowerHeader = document.createElement('div');

    siteTitle.innerText = 'Chrain\'s Home Recipes';
    home.innerText = 'Home';
    recipes.innerText = 'Recipes';
    cook.innerText = 'The Cooks!';

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
    navBar.appendChild(cook);
    pageContent.appendChild(headerDiv);
  })();
  const pageBody = document.createElement('div');
  document.body.appendChild(pageBody);
  const homePage = new Page(
    'Welcome to Chrain\'s Home Recipes!',
    pageBody,
    'home-page',
    Ingredients
  );
  homePage.homePageBody();
})();

/**
 * logic that reads recipe picture id and creates page data based on which recipe is selected
 * @param {*} page 
 */
const displayRecipePage = function (page) {
  page = this.id;
  const pageBody = document.querySelector('.recipe-page');
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id == page) {
      var chosenRecipe = recipes[i];
      var chosenRecipePage = new Page(
        chosenRecipe.name,
        pageBody,
        'recipe-page',
        chosenRecipe.picture
      );
    }
  }
  chosenRecipePage.individualRecipePageBody(
    chosenRecipe.ingredients,
    chosenRecipe.instructions
  );
};

/**
 * basic logic for creation of 3 main pages depending on which link clicked in navbar
 */
const mainContent = (() => {
  const pageBody = document.querySelector('.home-page');
  document.body.appendChild(pageBody);

  const homePage = function () {
    const homePage = new Page(
      'Welcome to Chrain\'s Home Recipes!',
      pageBody,
      'home-page',
      Ingredients
    );
    homePage.homePageBody();
  };

  const recipesPage = function () {
    const recipePage = new Page(
      'The real star of the show. . .the FOOD!',
      pageBody,
      'recipe-page',
      recipes
    );
    recipePage.recipesPageBody();
  };

  const cooksPage = function () {
    const cooksPage = new Page(
      'Let\'s meet our cooks!!',
      pageBody,
      'home-page',
      Chrain
    );
    cooksPage.cookPageBody();
  };

  return { homePage, recipesPage, cooksPage };
})();

// links are created, now to link to them and add event listeners
const links = document.querySelectorAll('li');

const switchPages = function () {
  links.forEach((link) => {
    link.classList.remove('current-page');
  });
  this.classList.add('current-page');

  switch (this.textContent) {
    case 'Home':
      mainContent.homePage();
      break;
    case 'Recipes':
      mainContent.recipesPage();
      break;
    case 'The Cooks!':
      mainContent.cooksPage();
      break;
  }
};

links.forEach((link) => {
  link.addEventListener('click', switchPages.bind(link));
});
