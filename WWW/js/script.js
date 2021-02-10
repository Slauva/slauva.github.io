(function () {
    const menu = document.querySelector('.burger');
    const list = document.querySelector('.nav');
    const html = document.querySelector('html');
    const links = document.querySelectorAll('.nav__item');
    const title = document.querySelector('.nav__title');
    const image = document.querySelector('.nav__image');

    menu.addEventListener('click', () => {
        menu.classList.toggle('active');
        list.classList.toggle('active');
        html.classList.toggle('overflow');
        title.classList.toggle('fade');
        image.classList.toggle('fade--image');
        links.forEach((link) => {
            link.classList.toggle('fade');
        });
    });
})();
