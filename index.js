
// Global selected variables
    
// Function to draw image and video items.
    function drawItems(container, row, column) {
        const imgItem = document.createElement('div');
        imgItem.className = 'img-Items';
        imgItem.id = `img-Item${row}${column}`;
        
        const image = document.createElement('img');
        image.className = 'image';
        image.id = `image${row}${column}`
        image.height = 640;
        image.width = 360;
        image.src = `https://picsum.photos/id/${randomNumber(20)}/400`
        imgItem.appendChild(image);
    
        container.appendChild(imgItem);

        const videoItem = document.createElement('div');
        videoItem.className = 'video-Items';
        videoItem.id = `video-Item${row}${column}`;
        
        const video = document.createElement('video');
        video.className = 'videos';
        video.id = `video${row}${column}`;
        video.src = `./videos/${randomNumber(5)}.mp4`;
        video.preload = 'auto';
        video.autoplay = true;
        video.muted = true;
        videoItem.appendChild(video);
    
        container.appendChild(videoItem);
        
    }

// Function to draw grid and call draw items function.
    function drawGrid(container) {
        const grid = document.createElement('div');
        grid.className = 'grid';
    
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                drawItems(grid, i, j);
                
            }
        }
    
        container.appendChild(grid);
    }

    function loadPage() {
// Local storage init function below!

        // if (!localStorage.getItem('Won')) {
        //     populateStorage(winsLossesCounterDisplay);
        //   } else {
        //     updateWinLoseCounterDisplay(winsLossesCounterDisplay);
        //   }

        const gridContainer = document.querySelector('#grid-container');

        drawGrid(gridContainer);
     
    }

    
    

    function randomNumber(limit) {
        return Math.floor(Math.random() * limit) + 1;
    }



    
    loadPage();
    
    
