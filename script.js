// script.js
document.addEventListener('DOMContentLoaded', () => {
    const tvContainer = document.getElementById('tv-container');
    const tvScreen = document.getElementById('tv-screen');
    const bootScreen = document.getElementById('boot-screen');
    const initiateButton = document.getElementById('initiate-button');
    const bootTextElement = document.querySelector('.boot-text');
    const mainInterface = document.getElementById('main-interface');
    const contentArea = document.getElementById('content-area');
    const sidePanelLinks = document.querySelectorAll('#side-panel a[href^="#"]');
    const body = document.body;

    const slogan = "ОДЕЖДА ГОВОРИТ // ПОКА ТЫ МОЛЧИШЬ";
    const codeAnimationDuration = 4000; // Должно совпадать с CSS @keyframes typing
    const sloganDelay = codeAnimationDuration + 300; // Задержка перед показом слогана
    const turnOnDelay = 500; // Задержка перед включением ТВ

    // --- Параллакс Эффект ---
    const parallaxFactor = 0.25;
    let scrollRAF; // Для requestAnimationFrame
    const handleScroll = () => {
        const scrollY = window.scrollY;
        tvContainer.style.transform = `translate(-50%, calc(-50% + ${scrollY * parallaxFactor}px))`;
        scrollRAF = null; // Сброс флага
    };
    window.addEventListener('scroll', () => {
        if (!scrollRAF) { // Выполнять только если не запланирован другой кадр
            scrollRAF = window.requestAnimationFrame(handleScroll);
        }
    }, { passive: true });

    // --- Логика Загрузки ---
    // 1. Показать слоган после анимации кода
    setTimeout(() => {
        if (bootTextElement) {
            bootTextElement.textContent = slogan;
            // Запускаем анимацию появления блока сообщения (уже есть в CSS)
            // bootTextElement.parentElement.style.opacity = 1; // Не нужно, если есть fadeIn анимация
        }
         // Убираем курсор после завершения печати
        const cursor = document.querySelector('.cursor');
        if (cursor) cursor.style.display = 'none';
    }, sloganDelay);

    // 2. Переход к интерфейсу по клику или таймеру
    const initiateInterface = () => {
        if (bootScreen.classList.contains('active')) { // Проверяем, активен ли экран
            bootScreen.classList.remove('active');
            body.classList.remove('booting');
             // Запускаем включение ТВ с задержкой
            setTimeout(() => {
                if (tvScreen) {
                    tvScreen.classList.remove('tv-off');
                }
            }, turnOnDelay);
        }
    };

    if (initiateButton && bootScreen) {
        initiateButton.addEventListener('click', initiateInterface);
        // Добавим авто-переход, если пользователь не кликает
        setTimeout(initiateInterface, sloganDelay + 4000); // Например, через 4с после слогана
    } else {
        console.error("Error: Boot screen or initiate button not found.");
        // Аварийный переход
         setTimeout(() => {
             bootScreen.classList.remove('active');
             body.classList.remove('booting');
             if (tvScreen) tvScreen.classList.remove('tv-off');
         }, sloganDelay + 1000);
    }

    // --- Навигация по якорям ---
    sidePanelLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement && contentArea) {
                const targetPosition = targetElement.offsetTop;
                // Плавно скроллим contentArea, а не window
                contentArea.scrollTo({
                    top: targetPosition - 20, // Небольшой отступ сверху
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Подготовка глитч-кнопок (добавление текста в span) ---
     const glitchButtons = document.querySelectorAll('.glitch-button');
    glitchButtons.forEach(button => {
        const text = button.textContent.trim(); // Получаем текст без лишних пробелов
        // Создаем и добавляем span для глитч-эффекта
        const beforeSpan = document.createElement('span');
        beforeSpan.setAttribute('aria-hidden', 'true');
        beforeSpan.textContent = text;
        button.insertBefore(beforeSpan, button.firstChild); // Вставляем первым

        const afterSpan = document.createElement('span');
        afterSpan.setAttribute('aria-hidden', 'true');
        afterSpan.textContent = text;
        button.appendChild(afterSpan); // Вставляем последним
    });

});