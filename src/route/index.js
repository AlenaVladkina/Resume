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

//==================================================================

router.get('/shoporder', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shoporder', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
        {
          text: 'Exit',
          href: null,
        },
      ],
      Logo: 'Logo',
    },

    header: 'Оформлення замовлення',
    contacts_data: {
      title: 'Контактні дані',

      buttons: [
        {
          text: 'Я новий покупець',
          isPrimary: true,
        },
        {
          text: 'Я постійний покупець',
          isOutline: true,
        },
      ],
      form: {
        input: {
          surname: {
            label: 'Прізвище',
            placeholder: 'Іванов',
            caption: 'Введіть прізвище',
          },
          name: {
            label: 'Ім’я',
            placeholder: 'Іван',
            caption: 'Введіть Ім’я',
          },
          phone: {
            label: 'Мобільний телефон',
            placeholder: '+38 (XXX) XXX XX XX',
            caption: 'Введіть телефон',
          },
          email: {
            label: 'Пошта',
            placeholder: 'ivanivanov@ukr.net',
            caption: 'Введіть Пошту',
          },
        },
        switch: [
          {
            text: 'Отримувати інформацію про новинки',
            isActive: false,
          },
          {
            text: 'Отримувати інформацію про знижки',
            isActive: true,
          },
        ],
      },
    },
    action_block: [
      { text: 'Швидке замовлення', isPrimary: true },
      { text: 'Видалити', isDanger: true },
      { text: 'Детальніше', isInfo: true },
    ],
    total: {
      title: 'Всього',
      item_list: [
        { name: 'Ноут', price: '25 000 ₴' },
        { name: 'Мишка', price: '25 000 ₴' },
        { name: 'Клава', price: '25 000 ₴' },
      ],
      additional_info: [
        { text: 'Всього товарів', value: '75 000 ₴' },
        { text: 'Купони', value: 'Немає' },
        { text: 'Доставка', value: 'Безкоштовно' },
      ],
      total_price: {
        text: 'Всього товарів',
        value: '75 000 ₴',
      },
      button: [
        {
          text: 'Підтвердити замовлення',
          isPrimary: true,
        },
        {
          text: 'Відмінити купони',
          isOutline: true,
        },
      ],
    },
    delivery: {
      title: 'Доставка',
      select: [
        {
          label: 'Місто доставки',
          placeholder: 'Оберіть місто доставки',
          options: [
            { value: '1', text: 'Київ' },
            { value: '2', text: 'Харків' },
            { value: '3', text: 'Одеса' },
            { value: '4', text: 'Львів' },
            { value: '5', text: 'Дніпро' },
            { value: '6', text: 'Донецьк' },
          ],
        },
        {
          label: 'Район доставки',
          placeholder: 'Оберіть район доставки',
          options: [
            { value: '1', text: 'Голосіївський' },
            { value: '2', text: 'Оболонський' },
            { value: '3', text: 'Печерський' },
            { value: '4', text: 'Дарницький' },
            { value: '5', text: 'Деснянський' },
            { value: '6', text: 'Подільський' },
          ],
        },
      ],
      delivery_type: [
        {
          type: 'Самовивіз з відділення Нової пошти',
          value: 'За тарифами перевізника',
        },
        {
          type: 'Кур’єром Нової пошти',
          value: 'За тарифами перевізника',
        },
        {
          type: 'Самовивіз з магазину',
          value: 'Безкоштовно',
        },
        {
          type: 'Доставка закордон',
          value: 'За тарифами перевізника',
        },
      ],
      payment: {
        title: 'Оплата',
        list: [
          {
            type: 'Оплата при отриманні',
            description: 'За тарифами перевізника',
          },
          {
            type: 'Оплатити зараз',
          },
        ],
      },
      contact: {
        title: 'Контактні дані отримувача',
        surname: {
          label: 'Прізвище',
          placeholder: 'Іванов',
          caption: 'Введіть прізвище',
        },
        name: {
          label: 'Ім’я',
          placeholder: 'Іван',
          caption: 'Введіть Ім’я',
        },
        phone: {
          label: 'Мобільний телефон',
          placeholder: '+38 (XXX) XXX XX XX',
          caption: 'Введіть телефон',
        },
        email: {
          label: 'Пошта',
          placeholder: 'ivanivanov@ukr.net',
          caption: 'Введіть Пошту',
        },
      },
      coment: {
        label: 'Коментар',
        placeholder: 'Я хочу, щоб',
      },
    },
    coupon: {
      title: 'Купони',
      select: {
        availabel_coupon: {
          label: 'Наявні купони',
          placeholder: 'Виберіть купон',
          options: [
            { value: '1', text: 'SEEYALATER' },
            { value: '2', text: 'HOTEL10' },
            { value: '3', text: 'DOWNLOAD25' },
          ],
        },
        friend_coupon: {
          label: 'Купони за запрошених друзів',
          placeholder: 'Виберіть купон',
          options: [
            { value: '1', text: 'TRAVEL5' },
            { value: '2', text: '75VACA' },
            { value: '3', text: '150VACA' },
          ],
        },
      },
      add: {
        friend: {
          label: 'Запросіть друзів та отримайте ще купонів',
          placeholder:
            'Введіть контактні дані друзів через ;',
          caption:
            'Напишіть електронні адреси/телефон друзів через “;”',
        },
        colleague: {
          label: 'Запросити колег',
          placeholder:
            'Введіть контактні дані колег через ;',
          caption:
            'Напишіть електронні адреси/телефон колег через “;”',
        },
      },
    },
    quiz: {
      title: 'Домоможи краще нам тебе зрозуміти',
      preference: {
        title:
          'Який тип обладнання ви зацікавлені в придбанні?',
        options: [
          'Смартфони',
          'Ноутбуки',
          'Планшети',
          'ПК',
          'Телевізори',
        ],
      },
      your_expirience: {
        label: 'Який у Вас досвід користування ПК',
      },
      purchase_frequency: {
        label: 'Як часто ви купуєте обладнання?',
        placeholder: 'Оберіть варіант',
        options: [
          { value: '1', text: 'Раз в тиждень' },
          { value: '2', text: 'Раз в місяць' },
          { value: '3', text: 'Раз в рік' },
        ],
      },
      factors: {
        title:
          'Які з наведених нижче факторів є для вас важливими при купівлі обладнання?',
        options: [
          'Ціна',
          'Репутація бренду',
          'Якість',
          'Особливості',
          'Гарантія',
          'Доступність',
          'Обслуговування клієнтів',
        ],
      },
    },
    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// Підключаємо роутер до бек-енду
module.exports = router

router.get('/shopcart', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('shopcart', {
    layout: 'shop',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
    },

    header: {
      title: 'Кошик',
      button: {
        text: 'Продовжити покупки',
        link: 'https://www.youtube.com/',
      },
    },

    goodsBlock: [
      {
        image: 'https://picsum.photos/110/110',
        name: 'Samsung Galaxy S21 Ultra ',
        description:
          'екран 6.8", процесор Exynos 2100/Snapdragon 888, 12 ГБ ОЗУ, камера 108 МП, акумулятор 5000 мАг',
        price: { title: 'Ціна', value: '25 000 ₴' },
        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
      {
        image: 'https://picsum.photos/110/110',
        name: 'Ноутбук Dell XPS 13',
        description:
          'екран 13.3", процесор Intel Core i7-1165G7, 16 ГБ ОЗУ, SSD на 512 ГБ, вага 1.2 кг.',
        price: { title: 'Ціна', value: '25 000 ₴' },

        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
      {
        image: 'https://picsum.photos/110/110',
        name: 'Телевізор LG OLED CX',
        description:
          'екран 55", роздільна здатність 4K, Smart TV, HDR, звук Dolby Atmos, 4 HDMI порти, 3 USB порти.',
        price: { title: 'Ціна', value: '25 000 ₴' },

        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
      {
        image: 'https://picsum.photos/110/110',
        name: 'Навушники Sony WH-1000XM4',
        description:
          'Bluetooth 5.0, активне шумозаглушення, 30 годин автономної роботи, сенсорне управління, вага 254 г.',
        price: { title: 'Ціна', value: '25 000 ₴' },

        amount: '1 шт.',
        buttons: [
          { text: 'Додати', isPrimary: true },
          { text: 'Видалити', isDanger: true },
        ],
      },
    ],

    total: {
      title: 'Сума замовлення',
      amount: '75 000 ₴',
      delivery: 'Без доставки',
      buttons: [
        {
          text: 'Оформити замовлення',
          link: 'https://www.youtube.com/',
          isSuccess: true,
        },
        {
          text: 'Офрмити кредит',
          link: 'https://www.youtube.com/',
          isOutline: true,
        },
      ],
    },

    goodsOtherBlock: {
      title: 'See other products',
      cards: [
        {
          image: 'https://picsum.photos/400/200',
          title: 'iPhone 13',
          description:
            'The latest iPhone model features a new A15 Bionic chip, improved camera system, and longer battery life.',
          isHot: false,
          idNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'MacBook Pro',
          description:
            "Apple's high-end laptop features a 16-inch Retina display, powerful M1 Pro or M1 Max chip, and up to 64GB of RAM.",
          isHot: true,
          idNew: false,
        },
        {
          image: 'https://picsum.photos/400/200',
          title: 'AirPods Pro',
          description:
            "Apple's premium wireless earbuds feature active noise cancellation, a customizable fit, and up to 4.5 hours of listening time.",
          isHot: false,
          idNew: false,
        },
      ],
    },

    subscribe: {
      header: 'Unlock Premium Content',
      description:
        'Subscribe to access exclusive content and features.',
      buttons: [
        {
          text: 'Register Now',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Buy Subscription',
          link: 'https://www.youtube.com/',
        },
      ],
    },

    footer: [
      [
        {
          text: 'Home',
          link: 'https://www.youtube.com/',
        },
        {
          text: 'Trending',
          link: 'https://www.youtube.com/feed/trending',
        },
        {
          text: 'Subscriptions',
          link: 'https://www.youtube.com/feed/subscriptions',
        },
        {
          text: 'Library',
          link: 'https://www.youtube.com/feed/library',
        },
      ],
      [
        {
          text: 'History',
          link: 'https://www.youtube.com/feed/history',
        },
        {
          text: 'Your Videos',
          link: 'https://www.youtube.com/feed/my_videos',
        },
        {
          text: 'Live',
          link: 'https://www.youtube.com/live',
        },
        {
          text: 'Settings',
          link: 'https://www.youtube.com/account',
        },
      ],
      [
        {
          text: 'Watch Later',
          link: 'https://www.youtube.com/playlist?list=WL',
        },
        {
          text: 'Liked Videos',
          link: 'https://www.youtube.com/playlist?list=LL',
        },
        {
          text: 'Music',
          link: 'https://www.youtube.com/music',
        },
        {
          text: 'Gaming',
          link: 'https://www.youtube.com/gaming',
        },
      ],
      [
        {
          text: 'Sports',
          link: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
        },
        {
          text: 'News',
          link: 'https://www.youtube.com/news',
        },
        {
          text: 'Fashion & Beauty',
          link: 'https://www.youtube.com/channel/UC1x8rV_f-2yPpzlN0JWZXIQ',
        },
        {
          text: 'Learning',
          link: 'https://www.youtube.com/learning',
        },
      ],
      [
        {
          text: 'Report History',
          link: 'https://www.youtube.com/feed/history/report_history',
        },
        {
          text: 'Help',
          link: 'https://support.google.com/youtube/?hl=en',
        },
        {
          text: 'Send Feedback',
          link: 'https://support.google.com/youtube/answer/4347644?hl=en',
        },
        {
          text: 'About',
          link: 'https://www.youtube.com/about/',
        },
      ],
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
