<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>handwriting vandal [DW]</title>
    <!-- Подключаем шрифты -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Anton&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body class="booting"> <!-- Класс booting для управления состоянием -->

    <!-- 0. ЭКРАН ЗАГРУЗКИ / BOOTING -->
    <div id="boot-screen" class="active">
        <div class="boot-sequence">
            <pre class="boot-code"></pre>
            <span class="cursor">_</span>
        </div>
        <div class="boot-message">
            <p class="boot-text"></p> <!-- Сюда JS вставит слоган -->
            <button id="initiate-button" class="glitch-button">[ > INITIATE INTERFACE ]</button>
        </div>
    </div>

    <!-- ОСНОВНОЙ ИНТЕРФЕЙС (скрыт изначально) -->
    <div id="main-interface">

        <!-- 1А. БОКОВАЯ ПАНЕЛЬ НАВИГАЦИИ -->
        <aside id="side-panel">
             <!-- Ссылки ведут к ID секций -->
            <a href="#desktop" class="panel-icon logo-icon glitch-hover" title="Home">h V</a>
            <a href="#interface-info" class="panel-icon glitch-hover" title="Interface Info">[QR]</a>
            <a href="#manifests-section" class="panel-icon glitch-hover" title="Manifests">[<>]</a>
            <a href="#gear-section" class="panel-icon glitch-hover" title="Gear">[H]</a>
            <a href="#source-section" class="panel-icon glitch-hover" title="Source">[S]</a>
            <a href="#contact-section" class="panel-icon glitch-hover" title="Contact">[@]</a>
            <!-- Иконка корзины позже -->
        </aside>

        <!-- 1Б. КОНТЕНТНАЯ ОБЛАСТЬ -->
        <main id="content-area">

            <!-- Состояние по умолчанию / Рабочий стол -->
            <section id="desktop" class="content-section active">
                 <div class="center-logo glitchy-bg">// HV █</div>
                 <div class="widgets">
                     <a href="#gear-section" class="widget-link">[ > Latest Drop: Vol. 4 Analog Ghosts ]</a>
                     <a href="#manifests-section" class="widget-link">[ > Manifesto Stream: Code of Rebellion... ]</a>
                     <p class="widget-status">[ > System Status: ONLINE / <span class="glitch-text">GLITCHING</span> ]</p>
                     <p class="widget-info">[ Scroll or use side panel to navigate ]</p>
                 </div>
            </section>

            <!-- 4. Как это работает -->
            <section id="interface-info" class="content-section">
                <h2>// INTERFACE / DECODE PROTOCOL</h2>
                <div class="interface-placeholder">
                     <h3>Одежда говорит пока ты молчишь.</h3>
                     <p>Каждая вещь handwriting vandal [DW] - ключ к цифровому манифесту.</p>
                     <ol class="mono-text">
                         <li>GET GEAR.</li>
                         <li>SCAN QR [Located back collar].</li>
                         <li>ACCESS MANIFEST [Unique digital experience].</li>
                         <li>AMPLIFY SIGNAL [Share if you dare].</li>
                     </ol>
                     <p>(Здесь может быть видео-демонстрация или интерактивная схема)</p>
                 </div>
            </section>

            <!-- 2. Манифесты -->
            <section id="manifests-section" class="content-section">
                <h2>// CODE / THE WALL</h2>
                <p class="section-subtitle">[ Navigate the stream. Decrypt the signal. ]</p>
                <div class="manifest-grid">
                    <!-- Заменяем плейсхолдер на реальные превью -->
                    <div class="manifest-preview glitch-hover">
                        <img src="https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Vol.1+Glitchwave" alt="Manifesto Vol.1 Preview" loading="lazy">
                        <div class="manifest-info">
                            <h4>Volume 1: Break the Silence</h4>
                            <p class="manifest-snippet">// Log Entry 001: Тишина накапливает ошибки...</p>
                            <a href="#" class="decrypt-link">[DECRYPT >>]</a>
                        </div>
                    </div>
                     <div class="manifest-preview glitch-hover">
                        <img src="https://via.placeholder.com/300x200/555555/CCCCCC?text=Vol.2+ConcreteGlitch" alt="Manifesto Vol.2 Preview" loading="lazy">
                         <div class="manifest-info">
                            <h4>Volume 2: Concrete Glitch</h4>
                            <p class="manifest-snippet">// Texture Render Error: Бетонная матрица повреждена...</p>
                            <a href="#" class="decrypt-link">[DECRYPT >>]</a>
                        </div>
                    </div>
                     <div class="manifest-preview glitch-hover">
                        <img src="https://via.placeholder.com/300x200/00FF00/000000?text=Vol.3+CodeRebellion" alt="Manifesto Vol.3 Preview" loading="lazy">
                         <div class="manifest-info">
                            <h4>Volume 3: Code of Rebellion</h4>
                             <p class="manifest-snippet">// Permission Denied: Стандартные скрипты отклонены...</p>
                            <a href="#" class="decrypt-link">[DECRYPT >>]</a>
                        </div>
                    </div>
                    <div class="manifest-preview glitch-hover">
                        <img src="https://via.placeholder.com/300x200/00FFFF/000000?text=Vol.4+AnalogGhost" alt="Manifesto Vol.4 Preview" loading="lazy">
                         <div class="manifest-info">
                            <h4>Volume 4: Analog Ghosts</h4>
                             <p class="manifest-snippet">// Data Stream Corrupted: Аналоговый сигнал...</p>
                            <a href="#" class="decrypt-link">[DECRYPT >>]</a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 3. Магазин -->
             <section id="gear-section" class="content-section">
                <h2>// GEAR / THE ARSENAL</h2>
                 <p class="section-subtitle">[ Physical interfaces for digital statements. ]</p>
                <div class="gear-grid">
                     <!-- Заменяем плейсхолдер на реальные товары -->
                      <div class="gear-item">
                         <div class="gear-image-container">
                            <img src="https://via.placeholder.com/350x350/111111/FFFFFF?text=SpeakUp+Tee" alt="Speak Up Tee" class="gear-image" loading="lazy">
                         </div>
                         <div class="gear-info">
                             <h3>Unit: Speak_Up Tee [Vol.1]</h3>
                             <p>Access Cost: 45.00 €</p>
                             <p>Available Specs: [S][M][L][XL]</p>
                             <div class="gear-buttons">
                                <button class="glitch-button small">[ SCAN MANIFEST ]</button>
                                <button class="glitch-button small primary">[ CLAIM UNIT ]</button>
                             </div>
                         </div>
                     </div>
                     <div class="gear-item">
                         <div class="gear-image-container">
                             <img src="https://via.placeholder.com/350x350/dddddd/000000?text=Concrete+Hoodie" alt="Concrete Hoodie" class="gear-image" loading="lazy">
                         </div>
                          <div class="gear-info">
                             <h3>Unit: Concrete Hoodie [Vol.2]</h3>
                             <p>Access Cost: 75.00 €</p>
                             <p>Available Specs: [M][L][XL]</p>
                              <div class="gear-buttons">
                                 <button class="glitch-button small">[ SCAN MANIFEST ]</button>
                                 <button class="glitch-button small primary">[ CLAIM UNIT ]</button>
                             </div>
                         </div>
                     </div>
                     <!-- Add more gear items -->
                 </div>
            </section>

             <!-- 5. О Нас -->
            <section id="source-section" class="content-section">
                 <h2>// SOURCE / FRAGMENTED DATA</h2>
                 <div class="source-content">
                     <p class="mono-text">// Boot Log: handwriting_vandal [Digital Wear Protocol]</p>
                     <p>Мы не создаем одежду. Мы кодируем манифесты в ткань. Физический ключ к цифровой правде. Взлом шаблонов мышления и потребления.</p>
                     <p class="mono-text">// Mission: Amplify silenced voices. Question the interface. Vandalize the ordinary.</p>
                     <p>Это не про тренды. Это про твой код. Твою историю. Твой глитч в системе.</p>
                     <p class="mono-text">[ Status: Running... ]</p>
                     <!-- Сюда можно добавить "битые" фото процесса -->
                 </div>
            </section>

            <!-- 6. Контакты (Добавлена секция) -->
            <section id="contact-section" class="content-section">
                 <h2>// CONTACT / OPEN CHANNEL</h2>
                 <div class="contact-content">
                     <p>Сигнал принят. Оставь сообщение.</p>
                      <form action="#" class="contact-form">
                        <input type="text" placeholder="// YOUR_ID" required>
                        <input type="email" placeholder="// RETURN_PATH (EMAIL)" required>
                        <textarea placeholder="// MESSAGE_PAYLOAD" rows="5" required></textarea>
                        <button type="submit" class="glitch-button primary">[ TRANSMIT >> ]</button>
                    </form>
                     <p class="direct-links">Direct Line: <a href="mailto:vandal@handwriting.com" class="glitch-hover">vandal@handwriting.com</a> | Secure Channel: <a href="https://t.me/yourhandle" target="_blank" rel="noopener noreferrer" class="glitch-hover">[Telegram]</a></p>
                 </div>
            </section>

        </main>

    </div>

    <!-- Скрипт остается внизу -->
    <script src="script.js"></script>
</body>
</html>
