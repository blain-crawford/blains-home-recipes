import './styles.css';

const headerContent = (() => {
  const createHeader = (() => {
    const headerDiv = document.createElement('div');
    const siteTitle = document.createElement('h1');
    const pageContent = document.getElementById('content');
    const navBar = document.createElement('ul');
    const home = document.createElement('li');
    const recipes = document.createElement('li');
    const contact = document.createElement('li');

    siteTitle.innerText = 'Blain Crawford\'s Home Recipes';
    home.innerText = 'Home';
    recipes.innerText = 'Recipes';
    contact.innerText = 'Contact';

    headerDiv.classList = 'header';
    navBar.classList = 'navbar';

    headerDiv.appendChild(siteTitle);
    headerDiv.appendChild(navBar);
    navBar.appendChild(home);
    navBar.appendChild(recipes);
    navBar.appendChild(contact);
    pageContent.appendChild(headerDiv);
  })();
})();

const mainContent = function () {
  let pageBody = document.createElement('div')
  document.body.appendChild(pageBody);

  let homePage = function () {
    pageBody.innerHTML = ''
    const h1 = document.createElement('h1');
    h1.textContent = 'Home Page!';
    pageBody.appendChild(h1)
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
  currentPage.homePage();
};

links.forEach((link) => {
  link.addEventListener('click', switchPages.bind(link));
});