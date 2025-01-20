const allImages = [
    'resources/img/carousel/1000031343.png', 'resources/img/carousel/1000031345.jpg', 'resources/img/carousel/1000031347.png', 'resources/img/carousel/1000031349.png',
    'resources/img/carousel/1000031351.png', 'resources/img/carousel/1000031353.jpg', 'resources/img/carousel/1000031355.jpg', 'resources/img/carousel/1000031357.jpg',
    'resources/img/carousel/1000031359.jpg', 'resources/img/carousel/1000031361.jpg', 'resources/img/carousel/1000031363.jpg', 'resources/img/carousel/1000031365.jpg',
    'resources/img/carousel/1000031367.jpg', 'resources/img/carousel/1000031369.jpg', 'resources/img/carousel/1000031371.jpg', 'resources/img/carousel/1000031373.jpg',
    'resources/img/carousel/1000031375.jpg', 'resources/img/carousel/1000031375.jpg', 'resources/img/carousel/1000031377.jpg', 'resources/img/carousel/1000031379.jpg',
    'resources/img/carousel/1000031381.png', 'resources/img/carousel/1000031383.jpg', 'resources/img/carousel/1000031385.png', 'resources/img/carousel/1000031387.png',
    'resources/img/carousel/1000031389.png', 'resources/img/carousel/1000031391.png', 'resources/img/carousel/1000031393.png', 'resources/img/carousel/1000031395.png',
    'resources/img/carousel/1000031397.jpg', 'resources/img/carousel/1000031399.png', 'resources/img/carousel/1000031401.png', 'resources/img/carousel/1000031403.png',
    'resources/img/carousel/1000031405.png', 'resources/img/carousel/1000031407.png', 'resources/img/carousel/1000031409.jpg', 'resources/img/carousel/1000031411.png',
    'resources/img/carousel/1000031413.png', 'resources/img/carousel/1000031415.png', 'resources/img/carousel/1000031417.png', 'resources/img/carousel/1000031419.jpg',
    'resources/img/carousel/1000031421.jpg',
  ];
  
  // Number of images per row
  const imagesPerRow = 8;
  
  // Number of rows
  const numberOfRows = 5;
  
  // Reference to the carousel container
  const carouselContainer = document.getElementById('carousel-container');
  
  // Function to create rows dynamically
  function createRow(images, speed) {
    console.log(images)
    const row = document.createElement('div');
    row.classList.add('carousel-row');
    row.dataset.speed = speed;
  
    // Add images to the row
    images.forEach((imgSrc) => {
      const img = document.createElement('img');
      img.src = imgSrc;
      console.log(img)
      img.alt = 'Carousel Image';
      row.appendChild(img);
    });
  
    return row;
  }
  
  // Split the image array into chunks of `imagesPerRow`
  for (let i = 0; i < numberOfRows; i++) {
    const start = i * imagesPerRow;
    const end = start + imagesPerRow;
  
    // Wrap around if there are not enough images for a full row
    const rowImages = allImages.slice(start, end).concat(
      allImages.slice(0, Math.max(0, end - allImages.length))
    );
  
    // Alternate direction for each row
    const speed = i % 2 === 0 ? 1 : -1;
    console.log(speed)
    // Create and append the row
    const row = createRow(rowImages, speed);
    console.log(row)
    carouselContainer.appendChild(row);
  }