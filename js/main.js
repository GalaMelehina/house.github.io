$(document).ready(function () {
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

// Кнопки - открыть модальное окно
modalButtons.forEach(function (item) {
    item.addEventListener('click', function () {
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hidden');

        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
        });

        // Запрет закрывать модальное окно внутри блока modal-window
        modal.querySelector('.card-galery').addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });
});

// // Кнопки - закрыть модальное окно
modalCloseButtons.forEach(function (item) {
    item.addEventListener('click', function () {
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden');
    })
});

// Закрытие модального окна по fade
allModals.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.add('hidden');
    })
});

// Параллакс-эффект
let prxScene = document.querySelector('main');
let prxItem = document.querySelectorAll('.move-img');

prxScene.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    for (let item of prxItem) {
        item.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    }
});

});

