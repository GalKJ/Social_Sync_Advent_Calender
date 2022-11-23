
// API endpoints
const baseEndpoint = 'https://picsum.photos/';
const squareRandomImageEndpoint = `${baseEndpoint}/200`
// const uniquePostcodeEndpoint = `${baseEndpoint}/postcodes`

// Selected global variables
    const gallery = document.querySelector('.gallery');
    const overlay = document.querySelector('.overlay');
    const overlayImage = overlay.querySelector('img');
    const overlayClose = overlay.querySelector('.close');

// Function to create HTML elements 
    function generateHTML([h, v]) {
    return `
        <div class="item h${h} v${v}">
        <img src="">
        <div class="item__overlay">
            <button>View →</button>
        </div>
        </div>
    `;
    }