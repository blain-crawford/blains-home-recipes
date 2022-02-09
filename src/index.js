let mainContent = (() => {
  const populateLandingPage = function () {
    let h1 = document.createElement('h1');
    let content = document.getElementById('content');
    h1.innerText = 'Hello, World!!';
    content.appendChild(h1);
  }

  return{populateLandingPage}
})();

mainContent.populateLandingPage();