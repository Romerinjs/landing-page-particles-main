import { HomeIcon, Crop, Pencil, Computer, Book, Rocket, Users} from "lucide-react";

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <Users size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    }]

// Datos sobre la página "About Me"
export const dataAboutPage = [
    {
        id: 1,
        title: "Asistente Virtual de Ventas",
        subtitle: "Boost Your Business",
        description: "Nuestro bot está diseñado para optimizar tus procesos de ventas, ofreciendo asistencia en tiempo real y mejorando la experiencia del cliente.",
    },
    {
        id: 2,
        title: "Automatización de Tareas",
        subtitle: "Eficiencia en Cada Interacción",
        description: "El bot se encarga de tareas repetitivas, liberando tiempo para que tu equipo se enfoque en lo que realmente importa: construir relaciones con los clientes.",
    },
    {
        id: 3,
        title: "Interacción 24/7",
        subtitle: "Siempre Disponible",
        description: "Con nuestro bot, tus clientes obtienen respuestas instantáneas a cualquier hora del día, mejorando la satisfacción y la retención.",
    },
    {
        id: 4,
        title: "Análisis y Reportes",
        subtitle: "Datos en Tiempo Real",
        description: "El bot proporciona informes detallados sobre el comportamiento de los usuarios y las tendencias del mercado, ayudando a tomar decisiones informadas.",
    },
];

// Datos para el contador
export const dataCounter = [
    {
        id: 0,
        endCounter: 5, // Puedes ajustar este número
        text: "Años de experiencia en automatización",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 200, // Ajusta este número según tus estadísticas
        text: "Clientes satisfechos con el bot",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 1500, // Ajusta este número según tus estadísticas
        text: "Interacciones realizadas por el bot",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 50, // Ajusta este número según tus estadísticas
        text: "Funciones de automatización disponibles",
        lineRight: false,
        lineRightMobile: false,
    },
];

// Datos de servicios ofrecidos por el bot
export const serviceData = [
    {
        icon: <Crop />, // Reemplaza con el icono adecuado
        title: "Atención al Cliente",
        description: "Brindamos respuestas instantáneas y soporte continuo a tus clientes para mejorar su experiencia.",
    },
    {
        icon: <Pencil />, // Reemplaza con el icono adecuado
        title: "Asistencia en Ventas",
        description: "Nuestro bot ayuda a guiar a los clientes a través del proceso de compra, aumentando la tasa de conversión.",
    },
    {
        icon: <Computer />, // Reemplaza con el icono adecuado
        title: "Recopilación de Datos",
        description: "El bot recopila información valiosa sobre tus clientes, permitiendo estrategias de marketing más efectivas.",
    },
    {
        icon: <Book />, // Reemplaza con el icono adecuado
        title: "Feedback del Cliente",
        description: "Recopilamos opiniones y comentarios de los usuarios para mejorar constantemente los servicios ofrecidos.",
    },
    {
        icon: <Rocket />, // Reemplaza con el icono adecuado
        title: "Integraciones Sencillas",
        description: "El bot se integra fácilmente con otras plataformas y herramientas que utilizas, mejorando la eficiencia.",
    },
];


export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];