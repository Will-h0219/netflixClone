import { FEATURE_CONSTANTS } from "../../components/feature-section/feature-section.constants"

const { tvFeature, downloadFeature, multiDeviceFeature, kidsFeature } = FEATURE_CONSTANTS.features;

export const LANDING_CONSTANTS_ES = {
  heroSection: {
    title: 'Peliculas y series ilimitadas y mucho más.',
    subtitle: 'Disfruta donde quieras. Cancela cuando quieras.',
    getStarted: {
      description: '¿Quieres ver algo ya? Escribe tu correo para crear una suscripción a Netflix o reactivarla.',
      inputCta: {
        name: 'heroSection_email',
        label: 'Email',
        placeholder: 'Email'
      },
      inputErrors: {
        required: 'El email es obligatorio.',
        invalidEmail: 'Escribe una dirección de email válida.'
      },
      getStartedCta: {
        label: 'Comenzar',
        name: 'getStarted'
      }
    }
  },
  featuresAndBenefits: [
    {
      id: tvFeature,
      content: {
        title: 'Disfruta en tu TV',
        description: 'Ve en smart TV, Playstation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.',
        media: {
          cover: 'https://i.imgur.com/k6uvvKS.png',
          mediaUrl: 'https://i.imgur.com/eUyUumw.gif'
        }
      },
      textFirst: true
    },
    {
      id: downloadFeature,
      content: {
        title: 'Descarga tus series para verlas offline',
        description: 'Guarda tu contenido favorito y tendrás siempre algo para ver.',
        media: {
          cover: 'https://i.imgur.com/nicC5nh.png',
          boxshot: 'https://i.imgur.com/7myEgdh.png',
          mediaIcon: 'https://i.imgur.com/0VC2xJL.gif',
          title: 'Stranger Things',
          status: 'Descargando...'
        }
      },
      textFirst: false
    },
    {
      id: multiDeviceFeature,
      content: {
        title: 'Disfruta donde quieras',
        description: 'Películas y series ilimitadas en tu teléfono, tablet, computadora y TV.',
        media: {
          cover: 'https://i.imgur.com/iKM1ZNk.png',
          mediaUrl: 'https://i.imgur.com/sp1RyaY.gif'
        }
      },
      textFirst: true
    },
    {
      id: kidsFeature,
      content: {
        title: 'Crea perfiles para niños',
        description: 'Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.',
        media: {
          cover: 'https://i.imgur.com/bFnrgRX.png'
        }
      },
      textFirst: false,
    }
  ],
  faqSection: {
    title: 'Preguntas Frecuentes',
    faqList: [
      {
        id: 'whatIs_faq',
        question: '¿Qué es Netflix?',
        answer: 'Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.<br><br>Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!'
      },
      {
        id: 'howMuch_faq',
        question: '¿Cuánto cuesta Neflix?',
        answer: 'Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 16.900 hasta $ 38.900 al mes. Sin costos adicionales ni contratos.'
      },
      {
        id: 'whereWatch_faq',
        question: '¿Dónde puedo ver Netflix?',
        answer: 'Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.<br><br>Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea.'
      },
      {
        id: 'howCancel_faq',
        question: '¿Cómo cancelo?',
        answer: 'Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.'
      },
      {
        id: 'whatToSee_faq',
        question: '¿Qué puedo ver en Netflix?',
        answer: 'Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.'
      },
      {
        id: 'kids_faq',
        question: '¿Es bueno Netflix para los niños?',
        answer: 'La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.<br><br>Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean.'
      }
    ],
    getStarted: {
      description: '¿Quieres ver algo ya? Escribe tu correo para crear una suscripción a Netflix o reactivarla.',
      inputCta: {
        name: 'faqSection_email',
        label: 'Email',
        placeholder: 'Email'
      },
      inputErrors: {
        required: 'El email es obligatorio.',
        invalidEmail: 'Escribe una dirección de email válida.'
      },
      getStartedCta: {
        label: 'Comenzar',
        name: 'getStarted'
      }
    }
  },
  footerSection: {
    questions: '¿Preguntas? Llama al ',
    phoneNumber: { label: '01 800 917 1564', path: 'https://youtu.be/dQw4w9WgXcQ' },
    links: [
      { label: 'Preguntas frecuentes', path: '/' },
      { label: 'Centro de ayuda', path: '/' },
      { label: 'Cuenta', path: '/' },
      { label: 'Prensa', path: '/' },
      { label: 'Relaciones con inversionistas', path: '/' },
      { label: 'Empleo', path: '/' },
      { label: 'Canjear tarjetas de regalo', path: '/' },
      { label: 'Comprar tarjetas de regalo', path: '/' },
      { label: 'Formas de ver', path: '/' },
      { label: 'Términos de uso', path: '/' },
      { label: 'Privacidad', path: '/' },
      { label: 'Preferencias de cookies', path: '/' },
      { label: 'Información corporativa', path: '/' },
      { label: 'Contáctanos', path: '/' },
      { label: 'Prueba de velocidad', path: '/' },
      { label: 'Avisos legales', path: '/' },
      { label: 'Solo en Netflix', path: '/' },
    ]
  }
}

export const LANDING_CONSTANTS_EN = {
  heroSection: {
    title: 'Unlimited movies, TV shows, and more',
    subtitle: 'Watch enywhere. Cancel anytime.',
    getStarted: {
      description: 'Ready to watch? Enter your email to create or restart your membership.',
      inputCta: {
        name: 'heroSection_email',
        label: 'Email address',
        placeholder: 'Email address'
      },
      inputErrors: {
        required: 'Email is required!',
        invalidEmail: 'Please enter a valid email address'
      },
      getStartedCta: {
        label: 'Get Started',
        name: 'getStarted'
      }
    }
  },
  featuresAndBenefits: [
    {
      id: tvFeature,
      content: {
        title: 'Enjoy on your TV',
        description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
        media: {
          cover: 'https://i.imgur.com/k6uvvKS.png',
          mediaUrl: 'https://i.imgur.com/eUyUumw.gif'
        }
      },
      textFirst: true
    },
    {
      id: downloadFeature,
      content: {
        title: 'Download your shows to watch offline',
        description: 'Save your favorites easily and always have something to watch.',
        media: {
          cover: 'https://i.imgur.com/nicC5nh.png',
          boxshot: 'https://i.imgur.com/7myEgdh.png',
          mediaIcon: 'https://i.imgur.com/0VC2xJL.gif',
          title: 'Stranger Things',
          status: 'Downloading...'
        }
      },
      textFirst: false
    },
    {
      id: multiDeviceFeature,
      content: {
        title: 'Watch everywhere',
        description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
        media: {
          cover: 'https://i.imgur.com/iKM1ZNk.png',
          mediaUrl: 'https://i.imgur.com/sp1RyaY.gif'
        }
      },
      textFirst: true
    },
    {
      id: kidsFeature,
      content: {
        title: 'Create profiles for kids',
        description: 'Send kids on adventures with their favorite characters in space made just for them-free with your membership.',
        media: {
          cover: 'https://i.imgur.com/bFnrgRX.png'
        }
      },
      textFirst: false
    }
  ],
  faqSection: {
    title: 'Frequently Asked Questions',
    faqList: [
      {
        id: 'whatIs_faq',
        question: 'What is Netflix?',
        answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br><br>You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!'
      },
      {
        id: 'howMuch_faq',
        question: 'How much does Netflix cost?',
        answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from COP16,900 to COP38,900 a month. No extra costs, no contracts.'
      },
      {
        id: 'whereWatch_faq',
        question: 'Where can I watch?',
        answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br><br>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you\'re on the go and without an internet connection. Take Netflix with you anywhere.'
      },
      {
        id: 'howCancel_faq',
        question: 'How do I cancel?',
        answer: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
      },
      {
        id: 'whatToSee_faq',
        question: 'What can I watch on Netflix?',
        answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
      },
      {
        id: 'kids_faq',
        question: 'Is Netflix good for kids?',
        answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br><br>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don\'t want kids to see.'
      }
    ],
    getStarted: {
      description: 'Ready to watch? Enter your email to create or restart your membership.',
      inputCta: {
        name: 'faqSection_email',
        label: 'Email address',
        placeholder: 'Email address'
      },
      inputErrors: {
        required: 'Email is required!',
        invalidEmail: 'Please enter a valid email address'
      },
      getStartedCta: {
        label: 'Get Started',
        name: 'getStarted'
      }
    }
  },
  footerSection: {
    questions: 'Questions? ',
    phoneNumber: { label: '01 800 917 1564', path: 'https://youtu.be/dQw4w9WgXcQ' },
    links: [
      { label: 'FAQ', path: '/' },
      { label: 'Help center', path: '/' },
      { label: 'Account', path: '/' },
      { label: 'Media center', path: '/' },
      { label: 'Investor relations', path: '/' },
      { label: 'Jobs', path: '/' },
      { label: 'Redeem gift cards', path: '/' },
      { label: 'Buy gift cards', path: '/' },
      { label: 'Ways to watch', path: '/' },
      { label: 'Terms of use', path: '/' },
      { label: 'Privacy', path: '/' },
      { label: 'Cookie preferences', path: '/' },
      { label: 'Corporate information', path: '/' },
      { label: 'Contact us', path: '/' },
      { label: 'Speed test', path: '/' },
      { label: 'Legal notices', path: '/' },
      { label: 'Only on Netflix', path: '/' },
    ]
  }
}
