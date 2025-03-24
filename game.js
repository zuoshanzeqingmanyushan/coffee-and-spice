document.addEventListener("DOMContentLoaded", function() {
    const photoGrid = document.querySelector('.photo-grid');
    const photos = [
        'photos/photo1.jpg',
        'photos/photo2.jpg',
        'photos/photo3.jpg',
        // Add more photo paths here
    ];

    photos.forEach(photo => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('photo-container');

        const img = document.createElement('img');
        img.src = photo;
        img.alt = 'Gallery Photo';

        const hoverButton = document.createElement('button');
        hoverButton.textContent = '👀'; // Emoji for the button
        hoverButton.classList.add('hover-button');

        imgContainer.appendChild(img);
        imgContainer.appendChild(hoverButton);
        photoGrid.appendChild(imgContainer);
    });
});
