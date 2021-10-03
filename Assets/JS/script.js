
// Method to Add Code and Paint GenerateIntroPage on Page
function GenerateIntroPage(headId, headText, pId, pText) {
    // Define variables within prototype object
    this.headId = headId || "";
    this.headText = headText || "";
    this.pId = pId || ""; 
    this.pText = pText || "";

    // Define the container & create elements
    var headingContainer = document.querySelector('header');
    var headingText = document.createElement('h1');
    var mainContainer = document.querySelector('main');
    var createParagraph = document.createElement('p');
    // Assign new elements with their resources
    headingText.id = headId; 
    headingText.textContent = headText;
    createParagraph.textContent = this.pText;
    createParagraph.id = this.pId;
    headingText.setAttribute('style', 'font-family: courier, monospace; font-weight: 300; text-shadow: 3px 1px #3485e761; font-sizeL 2.9em;');

   
    // Paint Elements to Page
    this.paintStartPage = function() {
        headingContainer.appendChild(headingText);
        mainContainer.appendChild(createParagraph); // Append h1, 
    }
}

// Prepare resources for the new elements
var startPage = new GenerateIntroPage('headingIntro', 'Code Quiz', 'quizInfo', quizInto); // code loaded 

// Paint New Elements to page 
startPage.paintStartPage();