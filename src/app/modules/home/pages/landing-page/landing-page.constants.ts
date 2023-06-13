import { FEATURE_CONSTANTS } from "../../components/feature-section/feature-section.constants"

const { tvFeature, downloadFeature, multiDeviceFeature, kidsFeature } = FEATURE_CONSTANTS.features;

export const LANDING_CONSTANTS_ES = {
  heroSection: {
    title: 'Peliculas y series ilimitadas y mucho más.',
    subtitle: 'Disfruta donde quieras. Cancela cuando quieras.',
    description: '¿Quieres ver algo ya? Escribe tu correo para crear una suscripción a Netflix o reactivarla.',
    getStarted: {
      inputCta: {
        name: 'email',
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
          mediaUrl: 'https://i.imgur.com/sp1RyaY.gif'
        }
      },
      textFirst: true
    },
    {
      id: kidsFeature,
      content: {
        title: 'Crea perfiles para niños',
        description: 'Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía.'
      },
      textFirst: false
    }
  ]
}

export const LANDING_CONSTANTS_EN = {
  heroSection: {
    title: 'Unlimited movies, TV shows, and more',
    subtitle: 'Watch enywhere. Cancel anytime.',
    description: 'Ready to watch? Enter your email to create or restart your membership.',
    getStarted: {
      inputCta: {
        name: 'email',
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
          mediaUrl: 'https://i.imgur.com/sp1RyaY.gif'
        }
      },
      textFirst: true
    },
    {
      id: kidsFeature,
      content: {
        title: 'Create profiles for kids',
        description: 'Send kids on adventures with their favorite characters in space made just for them-free with your membership.'
      },
      textFirst: false
    }
  ]
}
