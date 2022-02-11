import './styles.css';
import Ingredients from './images/ingredients.jpg';
import Chrain from './images/chrain.jpg';
import BagelAvocado from './images/bagel_avocado.jpg';
import Gumbo from './images/gumbo.jpg';
import ShortRibs from './images/shortribs.jpg';
import Pie from './images/pie.jpg';

const recipes = [
  { name: 'Smoked Bluefish Pâté Bagel with Avocado', picture: BagelAvocado, id: 1, ingredients: ['Bagels','Smoked Bluefish Pâté', 'feta cheese', 'Avocado','Pickeled Onions and Jalepenós', 'Hot Sauce'], instructions: ['Start off by making sure you get fresh bagels (this is a MUST for maximum delicious-ness), and toast them well to get a nice crispy inside!  This will help to keep a contrasting texture to all of the other ingredients', 'Spread a healthy layer of Bluefish Pâté on each slice of your bagel and spinkle a bit of feta cheese over top of it', 'Next, dice up some fresh spinach and toss in a bit of the juice from your pickled jalepènos for a bit of extra bite', 'Finally garnish with pickeled jalepènos and pickled onion, serve with a side of avocado and with salt, pepper, and your choice of hotsauce and get ready to get your day started with a healthy and incredible breakfast!']},
  { name: 'Gumbo', picture: Gumbo, id: 2, ingredients: ['4 bone-in skin-on chicken thighs', '3 teaspsoons kosher salt, divided', ' 2 teaspoons black pepper, divided', '1/2 cup grapeseed oil', '1/2 cup all purpose flour', '1 large onion diced', '1large bell pepper, diced', '2 ribs celery diced', '10 cloves garlic, crushed', '4 bay leaves', '12 ounces amber-style beer', '5 cups chicken-stock', '1/2 teaspoon cayenne pepper', '1 pound andouille sausage, bite sized pieces', 'rice for serving', 'green onions for garnish'], instructions: ['Preheat the oven to 400°F. Season the chicken thighs with 2 teaspoons of the salt and 1 teaspoon of the black pepper. Place on a rimmed baking sheet, skin side up, and roast for 20 minutes, or until the skin is lightly browned. Remove from the oven and set aside. Don’t throw that fat away, it’s going in the gumbo later.', 'In a heavy Dutch oven over medium heat, make a dark roux by simmering the oil and flour for about 45 minutes. Once the roux is the color of milk chocolate, add the trinity of onion, bell pepper, and celery and stir once every 5 seconds for about a minute until the vegetables begin to soften and caramelize. The roux is rocking hot, so these vegetables are going to cook really quickly. Don’t walk away! After a minute, add the garlic and bay leaves and cook for another 30 seconds, stirring frequently.', 'Deglaze the pot with the beer, scraping the bottom with a wooden spoon until all the browned bits are released. Stir constantly until it returns to a simmer. Add the stock and continue stirring until it returns to a simmer. Add the remaining 1 teaspoon salt and 1 teaspoon black pepper and the cayenne. Add the reserved chicken thighs (skin, bones, everything) and their fat and the sausage. Bring back to a bare simmer, being careful not to let it boil and not to let the roux scorch, reduce the heat to the lowest setting on your stove, and cover. Simmer for 3 hours, stirring every 30 minutes, scraping the bottom each time. Your gumbo should begin to thicken, but not like gravy. If it starts getting too thick before the 3 hours are up and you have to hit it with a little water to thin it, do so.', 'Do not skim that fat off the top!!!!', 'Serve with rice. Garnish with sliced green onions. If you want to bump up the heat, add a little scoop of pepper paste']},
  { name: 'Pecan Pie', picture: Pie, id: 3, ingredients: [], instructions: []},
  { name: 'Gochujang Shortribs', picture: ShortRibs, id: 4, ingredients: [], instructions: []},
];

class Page {
  constructor(bodyTopper, contentWrapper, pageClass, images) {
    this.bodyTopper = bodyTopper;
    this.contentWrapper = contentWrapper;
    this.contentWrapper.classList = pageClass;
    this.images = images;
  };

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

  contactPageBody() {
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
  };

  individualRecipePageBody (ingredients, instructions) {
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
    headerImage.classList = 'recipe-image';
    ingredientDiv.classList = 'ingredient-div';
    instructionsAndIngredients.classList = 'instructions-and-ingredients';
    instructionsList.classList = 'instructions';
    
    instructionsList.appendChild(instructionsHeader);
    this.contentWrapper.appendChild(pageTitle);
    this.contentWrapper.appendChild(headerImage);
    this.contentWrapper.appendChild(instructionsAndIngredients);

    for(let i = 0; i < this.ingredients.length; i++) {
      const ingredientListItem = document.createElement('li');
      ingredientListItem.innerText = this.ingredients[i];
      ingredientList.appendChild(ingredientListItem);
    }

    for(let i = 0; i < this.instructions.length; i++) {
      const instructionListItem = document.createElement('div');
      instructionListItem.innerText = this.instructions[i];
      instructionsList.appendChild(instructionListItem);
    }
    ingredientDiv.appendChild(ingredientsHeader);
    ingredientDiv.appendChild(ingredientList)
    instructionsAndIngredients.appendChild(ingredientDiv);
    instructionsAndIngredients.appendChild(instructionsList);

  }
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

const displayRecipePage = function (page) {
  page = this.id;
  const pageBody = document.querySelector('.recipe-page');
  console.log(pageBody);
  for(let i = 0; i < recipes.length; i++) {
    console.log(recipes[i].id);
    if(recipes[i].id == page) {
      var chosenRecipe = recipes[i];
      var chosenRecipePage = new Page(
        chosenRecipe.name, 
        pageBody, 
        'recipe-page', 
        chosenRecipe.picture
        );
      }
    }
    chosenRecipePage.individualRecipePageBody(chosenRecipe.ingredients, chosenRecipe.instructions);
};

const mainContent = function () {
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

  const contactPage = function () {
    const contactPage = new Page(
      'Let\'s meet our cooks!!',
      pageBody,
      'home-page',
      Chrain
    );
    contactPage.contactPageBody();
  };

  return { homePage, recipesPage, contactPage };
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
  }
};

links.forEach((link) => {
  link.addEventListener('click', switchPages.bind(link));
});
