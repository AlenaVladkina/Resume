// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600 $ в місяць',
  address: '51900,Дніпро, вул.Короленка,4-77',
}

var footer = {
  social: {
    email: {
      text: 'ivan@mail.com',
      href: 'mailto:ivan@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

//===================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },
    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: '10',
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: '10',
          isTop: true,
        },
        {
          name: 'VS Code & Git',
          point: '8',
          isTop: true,
        },
        {
          name: 'Terminal',
          point: '9',
        },
        {
          name: 'React.js',
          point: '0',
        },
        {
          name: 'PHP',
          point: 'null',
        },
      ],
      skills: [
        {
          name: 'HTML',
          point: '10',
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: '10',
          isTop: true,
        },
        {
          name: 'VS Code & Git',
          point: '8',
          isTop: true,
        },
        {
          name: 'Terminal',
          point: '9',
        },
        {
          name: 'React.js',
          point: '0',
        },
        {
          name: 'PHP',
          point: 'null',
        },
      ],
      hobbies: [
        {
          name: 'Догляд за конем',
          isMain: true,
        },
        {
          name: 'Східні єдиноборства',
          isMain: true,
        },
        {
          name: 'Вишивка',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },
    header,
    main: {
      education: [
        {
          name: 'МАУП',
          isEnd: false,
        },
        {
          name: 'МНТУ',
          isEnd: true,
        },
        {
          name: 'IT STEP Universyty',
          isEnd: false,
        },
        {
          name: 'Університет економіки і права "КРОК"',
          isEnd: true,
        },
      ],
      certificates: [
        {
          name: 'fact',
          id: 2,
        },
        {
          name: 'argument',
          id: 3,
        },
        {
          name: 'poleno',
          id: 5,
        },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },
    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: '10',
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: '10',
          isTop: true,
        },
        {
          name: 'VS Code & Git',
          point: '8',
          isTop: true,
        },
        {
          name: 'Terminal',
          point: '9',
        },
        {
          name: 'React.js',
          point: '0',
        },
        {
          name: 'PHP',
          point: 'null',
        },
      ],
      skills: [
        {
          name: 'HTML',
          point: '10',
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: '10',
          isTop: true,
        },
        {
          name: 'VS Code & Git',
          point: '8',
          isTop: true,
        },
        {
          name: 'Terminal',
          point: '9',
        },
        {
          name: 'React.js',
          point: '0',
        },
        {
          name: 'PHP',
          point: 'null',
        },
      ],
      hobbies: [
        {
          name: 'Догляд за конем',
          isMain: true,
        },
        {
          name: 'Східні єдиноборства',
          isMain: true,
        },
        {
          name: 'Вишивка',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/index8', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('index8', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume project',
    },

    layout: 'index',

    name: {
      firstName: 'Alona',
      lastName: 'Rudyk',
    },

    title: 'Resume project',

    main: {
      title: 'Список сторінок',

      discription: `Наша практика в проєкті "resume" майже завершилась, 
      нам залишилось лише під’єднати всі сторінки на index сторінці`,
    },

    buttons: [
      {
        text: 'summary',
        href: 'http://localhost:3000/summary',
      },
      {
        text: 'education',
        href: 'http://localhost:3000/education',
      },
      {
        text: 'skills',
        href: 'http://localhost:3000/skills',
      },
      {
        text: 'work',
        href: 'http://localhost:3000/work',
      },
      {
        text: 'car',
        href: 'http://localhost:3000/car',
      },
      {
        text: 'js',
        href: 'http://localhost:3000/js',
      },
      {
        text: 'person',
        href: 'http://localhost:3000/person',
      },
      {
        text: 'program',
        href: 'http://localhost:3000/program',
      },
      {
        text: 'shopcart',
        href: 'http://localhost:3000/shopcart',
      },
      {
        text: 'shophome',
        href: 'http://localhost:3000/shophome',
      },
      {
        text: 'shopnews',
        href: 'http://localhost:3000/shopnews',
      },
      {
        text: 'shoporder',
        href: 'http://localhost:3000/shoporder',
      },
      {
        text: 'shopproduct',
        href: 'http://localhost:3000/shopproduct',
      },
      {
        text: 'shopreview',
        href: 'http://localhost:3000/shopreview',
      },
      {
        text: 'task21',
        href: 'http://localhost:3000/task21',
      },
      {
        text: 'task31',
        href: 'http://localhost:3000/task31',
      },
    ],
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
