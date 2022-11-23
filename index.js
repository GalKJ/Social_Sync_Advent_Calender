
// Selected global variables
    const gallery = document.querySelector('.gallery');
    const overlay = document.querySelector('.overlay');
    const overlayImage = overlay.querySelector('img');
    const overlayClose = overlay.querySelector('.close')

// Function to create HTML elements 
    function generateHTML() {
    return `
        <div class="item">
        <img src="https://picsum.photos/500">
        <div class="item__overlay">
            <button>View →</button>
        </div>
        </div>
    `;
    }

// Function creates random numbers. 
    function randomNumber(limit) {
        return Math.floor(Math.random() * limit) + 1;
      }