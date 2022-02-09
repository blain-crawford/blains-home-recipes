
let mainContent = (() => {
  const createHeader = function () {
    let headerDiv = document.createElement('div');
    let pageContent = document.getElementById('content');
    headerDiv.innerText = 'Hello, World!!';
    content.appendChild(headerDiv);
  }

  return{createHeader}
})();

mainContent.createHeader();