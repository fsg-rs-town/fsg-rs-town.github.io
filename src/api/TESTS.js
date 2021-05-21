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
            mainTitle:"Персональный цветовой тест_ Личность",
            subTitle:"Какой цвет вам подходит?",
            mainUrl:"personalColorRus",
            scoreType:"typeCountingMBTI",
            mainImage:"https://images.ktestone.com/introImages/personalColorRus-intro.png",
            thumbImage:"https://images.ktestone.com/main-thumbnail/personalColorRus-thumb.png",
            horizontalBanner: "https://images.ktestone.com/horizontalNewTest/ETC/personalColorRus.png",
            lang:"Rus"
        },
        questions:[
            {
                which:"EI",
                question: 'Когда вы видите человека в первый раз?',
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: 'Вы начинаете разговор.'
                    },
                    {
                        type: "I",
                        score: 5,
                        content: 'Обычно с вами начинают разговор первыми.'
                    },
                ],
            },
            {
                which:"EI",
                question: "Чем обычно занимаетесь в выходные?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Наслаждаетесь общением с людьми."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Предпочитаете быть в одиночку."
                    },
                ]
            },
            {
                which:"EI",
                question: "Когда проводите время с друзьями, то?",
                answers:[
                    {
                        type: "E",
                        score: 2,
                        content: "Любите шумную компанию."
                    },
                    {
                        type: "I",
                        score: 5,
                        content: "Предпочитаете разговаривать с небольшим количеством друзей."
                    },
                ]
            },
            {
                which:"SN",
                question: "Что вы считаете более важным?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Если нет настоящего, нет и будущего."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Если не задумываться о будущем, не будет развития."
                    },
                ]
            },
            {
                which:"SN",
                question: "На работе вы?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Делаете так, как все."
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Придумываете свой способ действия."
                    },
                ]
            },
            {
                which:"SN",
                question: "Что обычно говорят вам окружающие?",
                answers:[
                    {
                        type: "S",
                        score: 2,
                        content: "Стабильный и терпеливый"
                    },
                    {
                        type: "N",
                        score: 5,
                        content: "Творческий и экстраординарный."
                    },
                ]
            },
            {
                which:"TF",
                question: "Когда нужно отказать, вы?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Даете твердый отказ."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Сразу не соглашаетесь, но все равно помогаете."
                    },
                ]
            },
            {
                which:"TF",
                question: "Когда вы злитесь, то...?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Логически высказываете свою точку зрения"
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Вам есть что сказать,\nно так злы, что начинаете плакать.\nего чувства, поэтому говорите завуалированно."
                    },
                ]
            },
            {
                which:"TF",
                question: "Друг рассказал о своей проблеме,\nно вам кажется это его вина. Ваши действия?",
                answers:[
                    {
                        type: "T",
                        score: 2,
                        content: "Расскажете другу, в чем его ошибка."
                    },
                    {
                        type: "F",
                        score: 5,
                        content: "Если сказать прямо, это может ранить"
                    },
                ]
            },
            {
                which:"JP",
                question: "Когда вы готовитесь к чему-то?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "отовитесь заранее накануне."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Оставляете дела на завтра,\nа потом забываете."
                    },
                ]
            },
            {
                which:"JP",
                question: "После занятий вам нужно домой учиться,\nно друзья зовут гулять.\nВаши действия?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Я это не планировал(а)..Не знаю,\nчто и делать."
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "ОК! Все-таки жизнь-это когда все идет не по плану!\nГуляем!!!"
                    },
                ]
            },
            {
                which:"JP",
                question: "В целом как вы себя опишите?",
                answers:[
                    {
                        type: "J",
                        score: 2,
                        content: "Мне нравится,\nкогда всё идет по плану!"
                    },
                    {
                        type: "P",
                        score: 5,
                        content: "Думаю на месте!\nЛюблю адаптироваться к ситуации!"
                    },
                ]
            },
        ],
        results:[
            {
                type: "ESTJ",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ESTJ",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ESTJ.png'
            },
            {
                type: "ESTP",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ESTP",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ESTP.png'
            },
            {
                type: "ESFJ",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ESFJ",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ESFJ.png'
            },
            {
                type: "ESFP",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ESFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ESFP.png'
            },
            {
                type: "ENTJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ENTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ENTJ.png'
            },
            {
                type: "ENTP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ENTP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ENTP.png'
            },
            {
                type: "ENFJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "ENFJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ENFJ.png'
            },
            {
                type: "ENFP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "ENFP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ENFP.png'
            },
            {
                type: "ISTJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "ISTJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ISTJ.png'
            },
            {
                type: "ISTP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISTP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ISTP.png'
            },
            {
                type: "ISFJ",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "ISFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ISFJ.png'
            },
            {
                type: "ISFP",
                desc: `세상 제일 귀엽지만 세상 제일 지랄견인 나는 ‘포메라니안’ \n
                `,
                query: "ISFP",
                score_range:range(26),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/ISFP.png'
            },
            {
                type: "INTJ",
                desc: `작지만 용감한 난 질투쟁이 치와와~ 난 참지 않Z…!\n`,
                query: "INTJ",
                score_range:range(26, 51),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/INTJ.png'
            },
            {
                type: "INTP",
                desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
                query: "INTP",
                score_range:range(51, 75),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/INTP.png'
            },
            {
                type: "INFJ",
                desc: `친숙한 댕댕이 , 리트리버\n`,
                query: "INFJ",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/INFJ.png'
            },
            {
                type: "INFP",
                desc: `지치는 게 뭐야? ~~세상 미친 텐션 비글!\n`,
                query: "INFP",
                score_range:range(76, 101),
                img_src:'https://images.ktestone.com/resultImages/personalColorRus/INFP.png'
            },
        ]
    }
]

export default TESTS;
