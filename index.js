function generateHTML([h, v]) {
    return `
    <div class="item h${h} v${v}">
      <img src="https://picsum.photos/id/${randomNumber(200)}/400">
      <div class="item__overlay">
        <button>View →</button>
      </div>
    </div>

    <div class="video-item h${h} v${v}">
      <video height=400 width=400 autoplay muted loop src="./videos/${randomNumber(
        5
      )}.mp4"></video>
      <div class="item__overlay">
        <button>View →</button>
      </div>
    </div>
  `;
  }

  function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
  }



    

    
    
