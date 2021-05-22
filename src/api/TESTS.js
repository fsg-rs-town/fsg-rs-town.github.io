function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

var TESTS = [
    // persoanlColor in Russian
    {
        info : {
            mainTitle:"Легкий тест на знание Беглецов",
            subTitle:"Настоящий ли ты фанат Беглецов?",
            mainUrl:"personalColorRus",
            scoreType:"numberScoring",
            mainImage:"https://images.ktestone.com/introImages/personalColorRus-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalColorRus-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/ETC/personalColorRus.png",
            lang:"Rus"
        },
        questions:[
            {
                which:"EI",
                question: 'Когда день рождения у Сок Джина?',
                answers:[
                    {
                        type: "E",
                        score: 0,
                        content: '1 сентября 1968'
                    },
                    {
                        type: "I",
                        score: 1,
                        content: '10 февраля 1966'
                    },
                    {
                        type: "E",
                        score: 0,
                        content: '6 апреля 1963'
                    },
                    {
                        type: "E",
                        score: 0,
                        content: '29 мая 1966'
                    },
                ],
            },
            {
                which:"EI",
                question: "Первый эпизод шоу был...",
                answers:[
                    {
                        type: "E",
                        score: 0,
                        content: '11 января 2010'
                    },
                    {
                        type: "E",
                        score: 0,
                        content: '11 августа 2010'
                    },
                    {
                        type: "I",
                        score: 1,
                        content: '11 июля 2010'
                    },
                    {
                        type: "E",
                        score: 0,
                        content: '11 июня 2010'
                    },
                ]
            },
            {
                which:"EI",
                question: "Кто известен также как Юрус Уиллис...",
                answers:[
                    {
                        type: "E",
                        score: 0,
                        content: 'Кан Гэри'
                    },
                    {
                        type: "E",
                        score: 1,
                        content: 'Ю Дже Сок'
                    },
                    {
                        type: "I",
                        score: 0,
                        content: 'Ха Ха'
                    },
                    {
                        type: "E",
                        score: 0,
                        content: 'Кван Су'
                    },
                ]
            },
            {
                which:"EI",
                question: "В каком эпизоде гостями были участницы SNSD?",
                answers:[
                    {
                        type: "E",
                        score: 0,
                        content: "90, 91"
                    },
                    {
                        type: "I",
                        score: 0,
                        content: "120, 121"
                    },
                    {
                        type: "I",
                        score: 0,
                        content: "45, 46"
                    },
                    {
                        type: "I",
                        score: 1,
                        content: "63, 64"
                    },
                ]
            },
            {
                which:"EI",
                question: "Что за супер-сила была у Ха Ха?",
                answers:[
                    {
                        type: "E",
                        score: 0,
                        content: "Управление разумом"
                    },
                    {
                        type: "I",
                        score: 0,
                        content: "Феникс"
                    },
                    {
                        type: "I",
                        score: 1,
                        content: "Управление временем"
                    },
                    {
                        type: "I",
                        score: 0,
                        content: "Тетрадь смерти"
                    },
                ]
            },
            {
                which:"EI",
                question: "Кто король ттакджи?",
                answers:[
                    {
                        type: "E",
                        score: 0,
                        content: "Только Ха Ха"
                    },
                    {
                        type: "I",
                        score: 0,
                        content: "Джи Хе"
                    },
                    {
                        type: "I",
                        score: 1,
                        content: "Дже Сок и Джон Кук"
                    },
                    {
                        type: "I",
                        score: 0,
                        content: "Кван Су и Дже Сок"
                    },
                ]
            }
        ],
        results:[
            {
                type: "beginner",
                desc: 'Добро пожаловать в мир беглецов',
                query: "beginner",
                score_range:range(3),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ESTJ.png'
            },
            {
                type: "profi",
                desc: "Вы, наверное, настоящий фанат",
                query: "profi",
                score_range:range(3, 7),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ESTP.png'
            } 
        ]
    }
]

export default TESTS;
