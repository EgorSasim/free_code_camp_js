const thumbnailImgs = document.querySelectorAll('.gallery > img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-btn');

thumbnailImgs.forEach(img => {
    img.addEventListener('click', () => showLightbox(img.src))
})

lightboxImg.addEventListener('click', e => e.stopPropagation());

lightbox.addEventListener('click', () => closeLightbox());
closeBtn.addEventListener('click', () => closeLightbox());

function showLightbox(imgSrc) {
    const fullScreenSrc = imgSrc.replace('-thumbnail', '');
    lightboxImg.src = fullScreenSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    lightbox.style.display = 'none'
}
