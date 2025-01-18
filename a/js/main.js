document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    burger.addEventListener('click', function () {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;

            // Закрыть другие открытые элементы аккордеона
            buttons.forEach(btn => {
                if (btn !== button) {
                    btn.classList.remove('active');
                    btn.nextElementSibling.style.display = 'none';
                }
            });

            // Переключить текущее состояние
            button.classList.toggle('active');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const phoneButton = document.getElementById('phone-button');
    const modal = document.getElementById('modal');
    const close = document.querySelector('.close');

    // Открыть модальное окно при нажатии на кнопку телефона
    phoneButton.addEventListener('click', function () {
        
        modal.style.display = 'block';
    });

    // Закрыть модальное окно при нажатии на "X"
    close.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Закрыть модальное окно при клике вне его
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
