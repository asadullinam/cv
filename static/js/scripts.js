// static/js/scripts.js

document.addEventListener("DOMContentLoaded", () => {
    // Темы
    const themeStyle = document.getElementById('theme-style');
    const currentTheme = localStorage.getItem('theme');

    function getSystemThemePreference() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    function getTimeBasedTheme() {
        const hour = new Date().getHours();
        // Предположим, что дневное время с 6 до 18
        if (hour >= 6 && hour < 18) {
            return 'light';
        }
        return 'dark';
    }

    // Применяем нужный CSS-файл
    function applyTheme(theme) {
    if (theme === 'dark') {
        themeStyle.setAttribute('href', darkThemeURL);
    } else {
        themeStyle.setAttribute('href', lightThemeURL);
    }
    localStorage.setItem('theme', theme);
    }

    // Определяем начальную тему
    let theme = 'light';
    if (currentTheme) {
        theme = currentTheme;
    } else {
        // Системная или временная логика
        theme = getSystemThemePreference();
        // Или, если нужно через время суток:
        // theme = getTimeBasedTheme();
    }
    applyTheme(theme);

    // Добавляем переключатель темы
    document.getElementById('theme-toggle-container').innerHTML = `
        <div class="theme-toggle-container d-flex align-items-center">
            <span class="me-2" data-translate='lightTheme'></span>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="theme_toggle" ${theme === 'dark' ? 'checked' : ''}>
            </div>
            <span class="ms-2" data-translate='darkTheme'></span>
        </div>
    `;

    const themeToggle = document.getElementById('theme_toggle');
    themeToggle.addEventListener('change', () => {
        const newTheme = themeToggle.checked ? 'dark' : 'light';
        applyTheme(newTheme);
    });

    // Переключатель языков
    const translations = {
        ru: {
            name: "Асадуллин Айдар",
            kredo: "Искатель счастья",
            about: "Обо мне",
            education: "Образование",
            projects: "Проекты",
            contact: "Контакты",
            sectionExperience: "Опыт работы",
            mail_me: "Почта",
            welcomeMessage: "Всем доброго времени суток, меня зовут Айдар! Я студент 2 курса ВШЭ ПМИ.",
            universityName: "Национальный исследовательский университет «Высшая школа экономики», Москва",
            universityDates: "Бакалавриат, 2023-2027",
            LISA_info: "LISA — чат-бот, предоставляющий безопасный доступ к интернет-ресурсам через VPN. Он автоматизирует взаимодействие с VPN-сервисом, включая управление подписками и анализ статистики использования.",
            image_processor_info: "Image Processor — консольное приложение на C++, которое позволяет применять различные фильтры к изображениям в формате BMP, такие как размытие, обрезка и негатив.",
            schoolName: "Физико-математический лицей №93, Уфа",
            schoolDates: "Среднее общее образование, 2012-2023",
            projectLisa: "Чат-бот, предоставляющий пользователям безопасный доступ к ресурсам сети Интернет через VPN. Бот разработан для автоматизации взаимодействия с VPN-сервисом, предоставления ключей доступа, управления подписками и анализа статистики использования. Взаимодействие осуществляется через мессенджер Telegram.",
            projectImageProcessor: "Консольное приложение-фоторедактор на C++, позволяющее обрабатывать BMP-картинки с кастомными фильтрами.",
            aboutDetails: `Студент-программист с сильными теоретическими знаниями в области программирования и математики.
                Являюсь многократным победителем и призером математических олимпиад: дипломы.
                Стремлюсь к углубленному изучению программирования, имею опыт работы с такими языками программирования как Python и C++,
                а также различными алгоритмами и структурами данных.
                Моя цель — стать высококвалифицированным программистом и применять свои знания для решения сложных задач и создания инновационных программных продуктов.`,
            sectionSkills: "Технические навыки",
            skills: [
                "Алгоритмы и структуры данных",
                "Python, C, C++",
                "Docker",
                "Базы данных",
                "JavaScript / HTML / CSS",
                "asyncio",
                "Многопоточность",
                "Многопроцессорность",
                "Digitalization"
            ],
            sinara_bank: "Синара банк",
            lightTheme: "Светлая",
            darkTheme: "Тёмная",
            footerInfo: "Резюме Асадуллина Айдара",
            errorNotFound: "Ничего не нашлось! Вот неудача, отправляйтесь на главную!",
            experienceItems: [
                "Работал с микросервисом для получения данных из PDF файла. Исправил ошибки, возникающие при некорректно заполненном документе и внес изменения в парсинг документов.",
                "Работал с микросервисом, который проверяет, находится ли домен в списке запрещенных Роскомнадзором. Внес изменения в обработку исключений при отмене запросов и добавил запись метрик сертификатов.",
                "Работал с парсерами PDF-выписок с государственных сайтов. Исправлял ошибки, связанные с некорректным заполнением документов, и писал тесты для нового функционала.",
                "Добавил обработку ошибок при отмене запросов в микросервисе проверки доменов, улучшил логирование информации, добавив метрики о сертификатах."
            ],
            home: "Главная",
            not_found: "Ничего не нашлось! Вот неудача, отправляйтесь на главную!"
        },
        en: {
            name: "Aidar Asadullin",
            kredo: "Seeker of Happiness",
            about: "About me",
            education: "Education",
            projects: "Projects",
            contact: "Contacts",
            sectionExperience: "Work Experience",
            mail_me: "Email",
            welcomeMessage: "Hello everyone, my name is Aidar! I am a second-year student at HSE AMI.",
            universityName: "National Research University Higher School of Economics, Moscow",
            universityDates: "Bachelor's Degree, 2023-2027",
            LISA_info: "LISA — a chatbot providing secure access to internet resources through VPN. It automates interaction with the VPN service, including subscription management and usage statistics analysis.",
            image_processor_info: "Image Processor — a console application in C++ that applies various filters to BMP images, such as blur, cropping, and negative.",
            studentStatus: "",
            schoolName: "Physics and Mathematics Lyceum No. 93, Ufa",
            schoolDates: "Secondary General Education, 2012-2023",
            projectLisa: "A chatbot that provides users with secure access to internet resources through VPN. The bot is designed to automate interaction with the VPN service, provide access keys, manage subscriptions, and analyze usage statistics. Interaction is done through the Telegram messenger.",
            projectImageProcessor: "A console photo editor application in C++ that allows processing BMP images with custom filters.",
            aboutDetails: `A programming student with strong theoretical knowledge in the fields of programming and mathematics.
                I am a multiple-time winner and prize-winner of mathematical Olympiads: diplomas.
                I strive for in-depth study of programming, have experience working with programming languages such as Python and C++,
                as well as various algorithms and data structures.
                My goal is to become a highly qualified programmer and apply my knowledge to solve complex problems and create innovative software products.`,
            sectionSkills: "Technical Skills",
            sinara_bank: "Sinara Bank",
            skills: [
                "Algorithms and Data Structures",
                "Python, C, C++",
                "Docker",
                "Databases",
                "JavaScript / HTML / CSS",
                "asyncio",
                "Multithreading",
                "Multiprocessing",
                "Digitalization"
            ],
            lightTheme: "Light",
            darkTheme: "Dark",
            footerInfo: "Aidar Asadullin's Resume",
            errorNotFound: "Nothing found! What a failure, go back to the main page!",
            experienceItems: [
                "Worked with a microservice to extract data from PDF files. Fixed errors that occurred when documents were incorrectly filled out and made changes to document parsing.",
                "Worked with a microservice that checks if a domain is on the list of prohibited sites by Roskomnadzor. Made changes to exception handling when requests are canceled and added certificate metrics logging.",
                "Worked with PDF parsers from government websites. Fixed errors related to incorrect document filling and wrote tests for new functionality.",
                "Added error handling for canceled requests in the domain verification microservice, improved information logging by adding certificate metrics."
            ],
            home: "Home",
            not_found: "Nothing found! What a failure, go back to the main page!"
        },
    };

    const currentLang = localStorage.getItem('lang') || 'en';

    function applyTranslations(lang) {
        console.log(`Applying translations for language: ${lang}`);
        // Перевод всех элементов с атрибутом data-translate
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang][key]) {
                if (el.tagName.toLowerCase() === 'a' && (key === 'telegramButton' || key === 'emailButton' || key === 'vkButton')) {
                    // Для кнопок контактов
                    el.textContent = translations[lang][key];
                } else if (el.tagName.toLowerCase() === 'a') {
                    // Для других ссылок
                    el.textContent = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            } else {
                console.warn(`Missing translation for key: ${key} in language: ${lang}`);
            }
        });

        // Обновить список навыков
        const skillsList = document.getElementById('skills-list');
        if (skillsList) {
            skillsList.innerHTML = ''; // Очистить старые навыки
            const skills = translations[lang].skills || [];
            skills.forEach(skill => {
                const listItem = document.createElement('li');
                listItem.className = 'd-flex align-items-center align-content-start m-2';
                listItem.style.lineHeight = '24px';
                const skillKey = skill.toLowerCase().replace(/[\s,]+/g, '_');
                listItem.innerHTML = `
                    <span class="pr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="white">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </span>
                    <span>${skill}</span>
                `;
                skillsList.appendChild(listItem);
            });
        }

        // Обновить список опыта работы
        const experienceList = document.getElementById('experience-list');
        if (experienceList) {
            experienceList.innerHTML = ''; // Очистить старые элементы
            const experiences = translations[lang].experienceItems || [];
            experiences.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                experienceList.appendChild(listItem);
            });
        }

        localStorage.setItem('lang', lang);
        setActiveLanguage(lang);
    }

    applyTranslations(currentLang);

    document.getElementById('lang-en').addEventListener('click', (e) => {
        e.preventDefault();
        applyTranslations('en');
    });

    document.getElementById('lang-ru').addEventListener('click', (e) => {
        e.preventDefault();
        applyTranslations('ru');
    });

    function setActiveLanguage(lang) {
        document.querySelectorAll('.language-toggle a').forEach(el => {
            el.classList.remove('active');
        });
        document.getElementById(`lang-${lang}`).classList.add('active');
    }

    // Установка активного языка при загрузке
    setActiveLanguage(currentLang);

    window.addEventListener('beforeunload', () => {
        localStorage.setItem('scrollPos', window.scrollY.toString());
        localStorage.setItem('lastAnchor', window.location.hash);
    });

    // Восстанавливаем скролл и хеш
    window.addEventListener('load', () => {
        const scrollPos = localStorage.getItem('scrollPos');
        const lastAnchor = localStorage.getItem('lastAnchor');
        if (lastAnchor) {
            window.location.hash = lastAnchor;
        }
        if (scrollPos) {
            window.scrollTo(0, parseInt(scrollPos, 10));
        }
    });
});
