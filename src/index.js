import recipes from './recipes';
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
    const cookNavBaring = document.createElement('h3');
    cookNavBaring.innerHTML = 'Click on Recipes to get cooking!';
    const headerImage = new Image();

    pageTitle.textContent = this.bodyTopper;
    headerImage.src = this.images;
    headerImage.classList = 'home-image';

    this.contentWrapper.appendChild(pageTitle);
    this.contentWrapper.appendChild(cookNavBaring);
    this.contentWrapper.appendChild(headerImage);
  }

  /**
   * generate cookNavBars page
   */
  cookNavBarPageBody() {
    this.contentWrapper.innerHTML = '';

    const pageTitle = document.createElement('h2');
    const introContainer = document.createElement('div');
    const intro = document.createElement('p');
    const headerImage = new Image();

    pageTitle.textContent = this.bodyTopper;
    intro.textContent = 'Blain and Christina (Chrain) have been living together for nearly three years now.  Both are computer programmers and musicians by day, but at night, and on weekends, they specialize as cookNavBars with many different specialties.  When not at work you can find them out seeing live music, playing video games with friends, or in the kitchen making the delicious food on this site, and much more!';
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
    const cookNavBaring = document.createElement('h3');
    cookNavBaring.innerHTML = 'Click on pictures for detailed recipe!';

    pageTitle.textContent = this.bodyTopper;

    this.contentWrapper.appendChild(pageTitle);
    this.contentWrapper.appendChild(cookNavBaring);
    const recipesDiv = document.createElement('div');

    for (let i = 0; i < recipeList.length; i += 1) {
      const individualRecipe = document.createElement('div');
      const recipeName = document.createElement('h3');
      const recipePic = new Image();

      recipesDiv.classList = 'recipe';
      recipePic.classList = 'recipe-image';
      // eslint-disable-next-line no-use-before-define
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

    for (let i = 0; i < this.ingredients.length; i += 1) {
      const ingredientListItem = document.createElement('li');
      ingredientListItem.innerText = this.ingredients[i];
      ingredientList.appendChild(ingredientListItem);
    }

    for (let i = 0; i < this.instructions.length; i += 1) {
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
// eslint-disable-next-line no-unused-vars
const headerContent = (() => {
  // eslint-disable-next-line no-unused-vars
  const createHeader = (() => {
    const headerDiv = document.createElement('div');
    const siteTitle = document.createElement('h1');
    const pageContent = document.getElementById('content');
    const navContainer = document.createElement('div');
    const navBar = document.createElement('ul');
    const homeNavBar = document.createElement('li');
    const recipesNavBar = document.createElement('li');
    const cookNavBar = document.createElement('li');
    const lowerHeader = document.createElement('div');

    siteTitle.innerText = 'Chrain\'s Home Recipes';
    homeNavBar.innerText = 'Home';
    recipesNavBar.innerText = 'Recipes';
    cookNavBar.innerText = 'The Cooks!';

    headerDiv.classList = 'header';
    navBar.classList = 'navbar';
    lowerHeader.classList = 'lowerheader';
    homeNavBar.classList = 'current-page';

    headerDiv.appendChild(siteTitle);
    headerDiv.appendChild(navContainer);
    headerDiv.appendChild(lowerHeader);
    navContainer.appendChild(navBar);
    navBar.appendChild(homeNavBar);
    navBar.appendChild(recipesNavBar);
    navBar.appendChild(cookNavBar);
    pageContent.appendChild(headerDiv);
  })();
  const pageBody = document.createElement('div');
  document.body.appendChild(pageBody);
  const homePage = new Page(
    'Welcome to Chrain\'s Home Recipes!',
    pageBody,
    'home-page',
    Ingredients,
  );
  homePage.homePageBody();
})();

/**
 * logic that reads recipe picture id and creates page data based on which recipe is selected
 */
function displayRecipePage() {
  const page = this.id;
  const pageBody = document.querySelector('.recipe-page');
  for (let i = 0; i < recipes.length; i += 1) {
    if (recipes[i].id === parseInt(page, 10)) {
      const chosenRecipe = recipes[i];
      const chosenRecipePage = new Page(
        chosenRecipe.name,
        pageBody,
        'recipe-page',
        chosenRecipe.picture,
      );
      chosenRecipePage.individualRecipePageBody(
        chosenRecipe.ingredients,
        chosenRecipe.instructions,
      );
    }
  }
}

/**
 * basic logic for creation of 3 main pages depending on which link clicked in navbar
 */
const mainContent = (() => {
  const pageBody = document.querySelector('.home-page');
  document.body.appendChild(pageBody);

  const homePage = () => {
    const chrainHomePage = new Page(
      'Welcome to Chrain\'s Home Recipes!',
      pageBody,
      'home-page',
      Ingredients,
    );
    chrainHomePage.homePageBody();
  };

  const recipesPage = () => {
    const recipePage = new Page(
      'The real star of the show. . .the FOOD!',
      pageBody,
      'recipe-page',
      recipes,
    );
    recipePage.recipesPageBody();
  };

  const cookNavBarsPage = () => {
    const chrainCookNavBarsPage = new Page(
      'Let\'s meet our cooks!!',
      pageBody,
      'home-page',
      Chrain,
    );
    chrainCookNavBarsPage.cookNavBarPageBody();
  };

  return { homePage, recipesPage, cookNavBarsPage };
})();

// links are created, now to link to them and add event listeners
const links = document.querySelectorAll('li');

function switchPages() {
  links.forEach((link) => {
    link.classList.remove('current-page');
  });
  this.classList.add('current-page');

  // eslint-disable-next-line default-case
  switch (this.textContent) {
    case 'Home':
      mainContent.homePage();
      break;
    case 'Recipes':
      mainContent.recipesPage();
      break;
    case 'The Cooks!':
      mainContent.cookNavBarsPage();
      break;
  }
}

links.forEach((link) => {
  link.addEventListener('click', switchPages.bind(link));
});
