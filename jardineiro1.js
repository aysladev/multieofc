function atualizarTotal() {
    let total = 0;
    const checkboxes = document.querySelectorAll('.item');
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            total += parseInt(checkbox.value);
        }
    });
    document.getElementById('total').textContent = total;
}

const images = document.querySelector('.carousel-images');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let index = 0;

function updateCarousel() {
    const width = images.children[0].clientWidth;
    images.style.transform = `translateX(-${index * width}px)`;
}

nextButton.addEventListener('click', () => {
    index = (index + 1) % images.children.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + images.children.length) % images.children.length;
    updateCarousel();
});



images.addEventListener('transitionend', () => {
    images.style.transition = '';
})

