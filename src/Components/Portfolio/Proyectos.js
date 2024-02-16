const urlImg = 'src/assets/ProjectsImages/'
const iconsUrl = [
    /*0*/{name: 'CSS', url:'src/assets/svgIcons/icons8-css.svg'},
    /*1*/{name: 'Elementor', url:'src/assets/svgIcons/icons8-elementor.svg'},
    /*2*/{name: 'JavaScript', url:'src/assets/svgIcons/icons8-javascript.svg'},
    /*3*/{name: 'React', url:'src/assets/svgIcons/icons8-reaccionar-nativo.svg'},
    /*4*/{name: 'Shopify', url:'src/assets/svgIcons/icons8-shopify.svg'},
    /*5*/{name: 'Woocommerce', url:'src/assets/svgIcons/icons8-woocommerce.svg'},
    /*6*/{name: 'WordPress', url:'src/assets/svgIcons/icons8-wordpress.svg'},
    /*7*/{name: 'PHP', url:'src/assets/svgIcons/icons8-php.svg'},
    /*8*/{name: 'Game Maker Studio 2', url:'src/assets/svgIcons/icons8-gms.svg'},
    /*9*/{name: 'Python', url:'src/assets/svgIcons/icons8-python.svg'},
    /*10*/{name: 'HTML', url:'src/assets/svgIcons/icons8-html.svg'},
]

export const reactProjects = [
    {
        title: "Buscador de gifs",
        desc: 'Pequeño proyecto en React, se obtienen gif tomando el valor del input y buscandolos mediante la API de GIPHY.',
        urlImg: urlImg  + "fotos portafolio hector valdes m gifs.webp",
        link: "https://gif-expert-react-mushroom.netlify.app",
        icons: [iconsUrl[3]]
    },
    {
        title: "Página Indicadores Económicos Chile",
        desc: 'Sitio web desarrollado con React para mostrar los indicadores económicos más usados en Chile.',
        urlImg: urlImg  + "fotos portafolio hector valdes m indicadores.webp",
        link: "https://indicadores-economicos-chile.netlify.app/",
        icons: [iconsUrl[3]]
    },
]

export const Extensiones = [
    {
        title: "Extensión Upper Lower Chrome",
        desc: 'Extensión de Google Chrome para convertir texto en minúsculas, mayúsculas y Capitalizada, desarrollado con HTML, CSS y JavaScript.',
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Extension para Chrome.webp",
        link: "https://chrome.google.com/webstore/detail/upperlower/clhpelfcjphahimcabjdabcocdnphnfe",
        icons: [iconsUrl[0], iconsUrl[2], iconsUrl[10]]
    },
    {
        title: "Extensión Indicadores Económicos Chile",
        desc: 'Extensión de Google Chrome que muestra los valores indicadores económicos más usado en Chile.',
        urlImg: urlImg  + "fotos portafolio hector valdes m extension Indicadores.webp",
        link: "https://chrome.google.com/webstore/detail/upperlower/clhpelfcjphahimcabjdabcocdnphnfe",
        icons: [iconsUrl[0], iconsUrl[2], iconsUrl[10]]
    },
]

export const WordPressProjects = [
    {
        title: "Agencia GrupoQs",
        desc: "Sitio web para agencia de marketing diseñado en Figma y maquetado en WordPress con Elementor y JetEngine.",
        urlImg: urlImg + 'fotos portafolio hector valdes m _ Agencia Grupo Qs.webp',
        link: "https://grupoqs.cl/",
        icons: [iconsUrl[0],iconsUrl[1],iconsUrl[2],iconsUrl[6]]
    },
    {
        title: "Dfwp-app.cl",
        desc: "Sistema de almacenamiento de documentos distribuidos por clientes. Desarrollado en WordPress, JetEngine, Elementor y PHP.",
        urlImg: urlImg  + 'fotos portafolio hector valdes m _ APP Drug Free Workplace.webp',
        link: "https://dfwp-app.cl/",
        icons: [iconsUrl[0],iconsUrl[1],iconsUrl[2],iconsUrl[6],iconsUrl[7]]
    },
    {
        title: "Estudio de tatuajes Cantauria",
        desc: "Sitio web para estudio de tatuajes diseñado en Figma y maquetado en WordPress con Elementor.",
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Cantauria Estudio.webp",
        link: "https://cantauriaestudio.cl/",
        icons: [iconsUrl[1],iconsUrl[6]]
    },
    {
        title: "Sitio web Frozen Sour",
        desc: "Tienda de bebidas desarrollada en Shopify.",
        urlImg: urlImg  + 'fotos portafolio hector valdes m _ Frozen Sour.webp',
        link: "https://frozensour.cl/",
        icons: [iconsUrl[4]]
    },
    {
        title: "Sitio web Vivid",
        desc: "Ecommerce desarrollado en WordPress, Woocommerce, HTML, CSS y JS.",
        urlImg: urlImg  + 'fotos portafolio hector valdes m vivid.webp',
        link: "https://www.vivid.cl/",
        icons: [iconsUrl[0],iconsUrl[1],iconsUrl[2],iconsUrl[6]]
    },
    {
        title: "Sitio web Lubricentro",
        desc: "Sitio web desarrollado en Wordpress.",
        urlImg: urlImg  + 'fotos portafolio hector valdes m lubricentro.webp',
        link: "https://servitecaquintanilla.cl/",
        icons: [iconsUrl[1],iconsUrl[6]]
    },
    {
        title: "Tienda online Te Moana Ori",
        desc: "Configuración de pasarela de pagos, productos dinamicos y mailing.",
        urlImg: urlImg  + 'fotos portafolio hector valdes m temoanaori.webp',
        link: "https://temoanaori.cl/",
        icons: [iconsUrl[1],iconsUrl[2],iconsUrl[5],iconsUrl[6]]
    },
    {
        title: "Sitio web empresa Cellzion",
        desc: "Sitio web corporativo desarrollado en WordPress con Elementor.",
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Cellzion.webp",
        link: "https://cellzion.cl/",
        icons: [iconsUrl[1],iconsUrl[6]]
    },
    {
        title: "Sitio web Alfacontadores",
        desc: "Landing page de servicios contables con calculadoras de IVA y honorarios desarrolladas en JavaScript.",
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Alfa Contadores.webp",
        link: "https://alfacontadores.cl/",
        icons: [iconsUrl[0],iconsUrl[1],iconsUrl[2],iconsUrl[6]]
    },
    {
        title: "Sitio web Armag",
        desc: "Sitio web para cotizar arriendo de maquinaría, desarrollado en WordPress con Elementor y Woocommerce.",
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Armag.webp",
        link: "https://armag.cl/",
        icons: [iconsUrl[1],iconsUrl[2],iconsUrl[5],iconsUrl[6]]
    },
    {
        title: "Tienda BrickPicture",
        desc: "Tienda de cuadros decorativos, diseño personalizado desarrollado en WordPress con Elementor y Woocommerce.",
        urlImg: urlImg  + "fotos portafolio hector valdes m _ BrickPicture.webp",
        link: "https://brickpicture.cl/",
        icons: [iconsUrl[0],iconsUrl[1],iconsUrl[2],iconsUrl[5],iconsUrl[6]]
    },
    {
        title: "Landing page Ilustración Linna-Dem",
        desc: "Portafolio de ilustración desarrollado en WordPress.",
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Linna-dem.webp",
        link: "#",
        icons: [iconsUrl[0],iconsUrl[1],iconsUrl[2],iconsUrl[6]]
    },
    {
        title: "Landing Page BeSpine",
        desc: "Landing page de producto área de medicina, desarrollado en WordPress con Elementor.",
        urlImg: urlImg  + "fotos portafolio hector valdes m _ BeSpine.webp",
        link: "https://bespine.com/",
        icons: [iconsUrl[0],iconsUrl[1],iconsUrl[2],iconsUrl[6]]
    },
    {
        title: "Sitio web Estación Lastarria",
        desc: "Sitio web con cursos, desarrollado en WordPress con Elementor.",
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Estacion Lastarria.webp",
        link: "https://estacionlastarria.cl/",
        icons: [iconsUrl[0],iconsUrl[1],iconsUrl[2],iconsUrl[6]]
    },
    {
        title: "Sitio web Quntur",
        desc: "Sitio web empresa Quntur, desarrollado en WordPress con Elementor.",
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Quntur.webp",
        link: "#",
        icons: [iconsUrl[0],iconsUrl[1],iconsUrl[2],iconsUrl[6]]
    },
    {
        title: "Sitio web Refuerza Más",
        desc: "Sitio web empresa Refuerza más, desarrollado en WordPress con Elementor.",
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Refuerzamas.webp",
        link: "#",
        icons: [iconsUrl[0],iconsUrl[1],iconsUrl[2],iconsUrl[6]]
    },
    {
        title: "Sitio web Sin deudas",
        desc: "Sitio web empresa Sin Deudas, desarrollado en WordPress con Elementor.",
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Sin Deudas.webp",
        link: "#",
        icons: [iconsUrl[0],iconsUrl[1],iconsUrl[2],iconsUrl[6]]
    },
]

export const gamesProjects = [
    {
        title: "The Dream Of The River",
        desc: 'Este juego trata sobre un pez que nada por un rio, inspirado en los humedales de Quilpué, fue desarrollado para una JAM en 12 días.',
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Juego The Dream of the River.webp",
        link: "https://gx.games/es/games/gaer2v/the-dream-of-the-river/",
        icons: [iconsUrl[8]]
    },
    {
        title: "ZomBeast Under Attack",
        desc: 'Un simple juego de disparos hecho para aprender, tal vez no sea el juego del año, pero me ayudó a mejorar mis habilidades de programación.',
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Juego Zombeast Under Attack.webp",
        link: "https://hvgamestudio.itch.io/zombeast-underattack",
        icons: [iconsUrl[8]]
    },
    {
        title: "Humanity Part I",
        desc: 'Un juego de aventuras donde acompañaremos a Frank, un humano creado genéticamente, a través de la misteriosa ciudad de Uxo, gobernada por un rey que tiene muchos secretos que contar...',
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Juego Humanity Part I.webp",
        link: "https://hvgamestudio.itch.io/humanity-part-i",
        icons: [iconsUrl[8]]
    },
]

export const codeProjects = [    
    {
        title: "Calculadora de IVA",
        desc: 'Función personalizada para un cliente donde permite al usuario calcular IVA y calcular boletas de honorarios, desarrollado con JavaScript insertado en WordPress.',
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Calculadora de IVA.webp",
        link: "#",
        icons: [iconsUrl[2]]
    },
    {
        title: "Juego Cartas por la inclusión",
        desc: 'Página pensada como un juego de cartas donde se muestran 3 mazos con diseños diferentes, los cuales se pueden revolver y girar las cartas. Desarrollado con JavaScript insertado en WordPress.',
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Juego cartas por la inclusion.webp",
        link: "https://cartasporlainclusion.com/juego-online/",
        icons: [iconsUrl[0], iconsUrl[2], iconsUrl[10]]
    },
    {
        title: "Mapa interactivo",
        desc: 'Mapa interactivo diseñado para un cliente, consta de 5 países, cada uno con hotspot indicando proyectos, cada hotspot activa un listing con información del proyecto. Fue desarrollado con JavaScript insertado en WordPress mezclando JetEngine y Elementor.',
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Mapa interactivo con proyectos.webp",
        link: "#",
        icons: [iconsUrl[0], iconsUrl[1], iconsUrl[2]]
    },
    {
        title: "Script para comprimir imágenes",
        desc: 'Script desarrollado en Python para convertir imágenes PNG y JPG a formato para comprimido WEBP.',
        urlImg: urlImg  + "fotos portafolio hector valdes m _ Script python.webp",
        link: "https://github.com/Mushroom0047/Image-converte-py",
        icons: [iconsUrl[9]]
    },
    {
        title: "Web y Script para contar pixeles",
        desc: 'Sitio web desarrollado con HTML, CSS y JavaScript usado para contar colores de los pixeles de una imágen PNG.',
        urlImg: urlImg  + "fotos portafolio hector valdes m  Script contador de pixeles.webp",
        link: "https://pixel-counter.netlify.app/",
        icons: [iconsUrl[0],iconsUrl[2],iconsUrl[10]]
    },
]