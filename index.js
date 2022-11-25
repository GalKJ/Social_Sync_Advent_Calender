
// Global selected variables
    
// Function to draw image and video items.
    function drawItems(container, id) {
        const imgItem = document.createElement('div');
        imgItem.className = 'img-items';
        imgItem.id = `img-item${id}`;
        
        const image = document.createElement('img');
        image.className = 'image';
        image.id = `image${id}`
        image.height = 360;
        image.width = 360;
        image.src = `https://picsum.photos/id/${randomNumber(20)}/400`
        imgItem.appendChild(image);

        const itemOverlay = document.createElement('div');
        itemOverlay.className = 'item-overlay';
        imgItem.appendChild(itemOverlay);

        const viewButton = document.createElement('button');
        viewButton.className = 'view-button';
        viewButton.textContent = '🎄View🎄';
        itemOverlay.appendChild(viewButton);
    
        container.appendChild(imgItem);



        const videoItem = document.createElement('div');
        videoItem.className = 'video-items';
        videoItem.id = `video-item${id}`;
        
        const video = document.createElement('video');
        video.className = 'videos';
        video.id = `video${id}`;
        video.height = 360;
        video.width = 360;
        video.src = `./videos/${randomNumber(5)}.mp4`;
        video.preload = 'auto';
        video.muted = true;
        videoItem.appendChild(video);

        const videoItemOverlay = document.createElement('div');
        videoItemOverlay.className = 'video-item-overlay';
        videoItem.appendChild(videoItemOverlay);

        const videoViewButton = document.createElement('button');
        videoViewButton.className = 'video-view-button';
        videoViewButton.textContent = '🎅View🎅';
        videoItemOverlay.appendChild(videoViewButton);
    
        container.appendChild(videoItem);
        
    }

// Function to draw grid and call draw items function.
    function drawGrid(container) {

        const grid = document.querySelector('.grid');
    
        for (let i = 0; i < 12; i++) {

                drawItems(grid, i);
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
    
    
