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
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },
    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about:
                'VillageWaters is a three-year development project',
              stacks: [
                {
                  name: 'React JS',
                },
                {
                  name: 'HTML',
                },
                {
                  name: 'Node JS',
                },
              ],
              awards: [
                {
                  name: 'The LIFE Awards recognise the most innovative, inspirational and effective LIFE projects in three categories: nature protection, environment and climate action.',
                },
                {
                  name: 'PMI Awards honor individuals and organizations whose passion and expertise make the greatest contributions to the project management profession.',
                },
              ],
              stackAmount: 1,

              awardAmount: 2,
            },
          ],
        },
      ],
    },

    footer,
  })
})

router.get('/index8', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('index8', {
    // ↙ сюди вводимо JSON дані

    layout: 'index',

    page: {
      title: 'Resume project',
    },

    name: {
      firstName: 'Alona',
      lastName: 'Rudyk',
    },
    header: 'Resume project',

    buttons: [
      {
        name: 'Skills',
        link: 'http://localhost:3000/skills',
      },
      {
        name: 'Education',
        link: 'http://localhost:3000/education',
      },
      {
        name: 'Work',
        link: 'http://localhost:3000/work',
      },
      {
        name: 'Car',
        link: 'http://localhost:3000/car',
      },
      {
        name: 'Js',
        link: 'http://localhost:3000/js',
      },
      {
        name: 'Person',
        link: 'http://localhost:3000/person',
      },
      {
        name: 'Program',
        link: 'http://localhost:3000/program',
      },
      {
        name: 'Task21',
        link: 'http://localhost:3000/task21',
      },
      {
        name: 'Task31',
        link: 'http://localhost:3000/task31',
      },
      {
        name: 'Shopcart',
        link: 'http://localhost:3000/shopcart',
      },
      {
        name: 'Shophome',
        link: 'http://localhost:3000/shophome',
      },
      {
        name: 'Shopnews',
        link: 'http://localhost:3000/shopnews',
      },
      {
        name: 'Shoporder',
        link: 'http://localhost:3000/shoporder',
      },
      {
        name: 'Shopproduct',
        link: 'http://localhost:3000/shopproduct',
      },
      {
        name: 'Shopreview',
        link: 'http://localhost:3000/shopreview',
      },
    ],
  })
})

router.get('/car', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('car', {
    layout: 'default',

    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'silver',
    features: {
      interior: {
        seats: {
          material: 'leather',
          color: 'black',
          heated: true,
          ventilated: true,
        },
        dashboard: {
          material: 'plastic',
          color: 'black',
          display: {
            type: 'LCD',
            size: 10.1,
            resolution: '1280x720',
            touchscreen: true,
          },
        },
        audio: {
          system: 'JBL',
          speakers: 8,
          subwoofer: true,
          bluetooth: true,
          USB: true,
        },
      },
      exterior: {
        wheels: {
          size: 18,
          type: 'alloy',
          color: 'silver',
        },
        headlights: {
          type: 'LED',
          brightness: 'high',
          automatic: true,
        },
        sunroof: {
          type: 'panoramic',
          size: 'large',
          automatic: true,
        },
      },
      safety: {
        airbags: {
          front: 2,
          side: 2,
          knee: 2,
          rear: 2,
        },
        assistance: {
          blind_spot_monitoring: true,
          rear_cross_traffic_alert: true,
          lane_departure_warning: true,
          adaptive_cruise_control: true,
          collision_warning: true,
        },
      },
    },
    engine: {
      type: 'gasoline',
      displacement: 2.5,
      horsepower: 206,
      torque: 186,
      transmission: {
        type: 'automatic',
        gears: 8,
      },
    },
    fuel_economy: {
      city: 28,
      highway: 39,
      combined: 32,
    },
    price: {
      base: 25900,
      destination: 995,
      options: {
        navigation: 1200,
        moonroof: 800,
        premium_paint: 595,
      },
      total: 28990,
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// Підключаємо роутер до бек-енду
module.exports = router
