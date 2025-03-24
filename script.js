document.addEventListener("DOMContentLoaded", function() {
    const photoGrid = document.querySelector('.photo-grid');
    const photos = [
        { src: 'photos/photo1.jpg', caption: 'A moment in time' },
        { src: 'photos/photo2.jpg', caption: 'Nature’s beauty' },
        { src: 'photos/photo3.jpg', caption: 'Urban exploration' },
        // Add more photos and captions here
    ];

    photos.forEach(photo => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('photo-container');

        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = 'Gallery Photo';

        const caption = document.createElement('div');
        caption.classList.add('caption');
        caption.textContent = photo.caption;

        imgContainer.appendChild(img);
        imgContainer.appendChild(caption);
        photoGrid.appendChild(imgContainer);
    });
});
