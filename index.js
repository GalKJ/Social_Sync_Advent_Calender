
// Selected global variables
    const gallery = document.querySelector('.gallery');
    // const overlay = document.querySelector('.overlay');
    // const overlayImage = overlay.querySelector('img');
    // const overlayClose = overlay.querySelector('.close')
    const videos = document.querySelectorAll('.videos');
    const images = document.querySelectorAll('.images');


// Function generates random numbers. 
    function randomNumberGenerator(limit) {
        return Math.floor(Math.random() * limit) + 1;
      }

      images.forEach(image => {
        image.src = `https://picsum.photos/id/${randomNumberGenerator(200)}/400`
        image.id = 
      });



    

    
    
