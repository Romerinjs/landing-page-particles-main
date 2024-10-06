"use client"; // Asegúrate de que este componente se comporte como un Client Component
import { CoverParticles } from "@/components/cover-particles";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../lib/firebaseConfig';
import { User } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Asegúrate de importar los estilos de Swiper
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import TransitionPage from "@/components/transition-page"; // Importar el componente TransitionPage

// Instalar el módulo de Autoplay
SwiperCore.use([Autoplay]);


const flashCardsData =
  [
    { id: 1, text: 'Consejo rápido:\nNo olvides respirar antes de hacer cualquier fuerza fisica' },
    { id: 2, text: 'Consejo rápido:\nSé consciente de los límites: Recuerda que los bots tienen limitaciones y pueden no entender todas las solicitudes, especialmente si son muy abstractas o emocionales. Ajusta tus expectativas en función de esto.' },
    { id: 3, text: 'Consejo rápido:\nTen paciencia: Si el bot no responde de inmediato o no entiende la solicitud, intenta reformularla o dar más contexto.' },
    { id: 4, text: 'Consejo rápido:\nUsa palabras clave: Si buscas información específica, incluye las palabras clave más relevantes. Los bots suelen estar diseñados para reconocer términos importantes.' },
  ];

const CartProfile = () => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                router.push('/'); // Redirigir a la página de inicio si no hay usuario
            }
        });

        return () => unsubscribe(); // Limpieza del suscriptor
    }, [router]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/'); // Asegúrate de que redirige a la ruta correcta
        } catch (error) {
            console.error("Error al cerrar sesión:", error); // Imprimir cualquier error
        }
    };

    if (!user) {
        return null; // Muestra nada mientras se determina el estado de autenticación
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#004aad] to-[#001c69] text-white">
            <CoverParticles />
            <TransitionPage />

            <div className="absolute top-4 right-4">
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 hover:bg-red-500 transition-colors duration-200 rounded-md">
                        Log Out
                </button>
            </div>
            
            <h1 className="text-3xl font-bold mb-8">Bienvenido, {user.email}!</h1>
            <p className="mb-4">Haz click aquí para descargar el archivo:</p>
            <a href="/ruta/al/archivo" className="px-4 py-2 mt-4 bg-blue-600 hover:bg-blue-500 transition-colors duration-300 rounded-md">
                Descargar archivo
            </a>

            {/* Flash Cards usando Swiper */}
            <Swiper
                spaceBetween={50} // Espacio entre las tarjetas
                slidesPerView={1} // Número de tarjetas visibles
                loop={true} // Repite las tarjetas
                autoplay={{
                    delay: 3000, // Cambia cada 5 segundos
                    disableOnInteraction: false, // Mantiene autoplay incluso después de la interacción del usuario
                }}
                className="mt-8 w-full max-w-lg"
            >
                {flashCardsData.map((card) => (
                    <SwiperSlide key={card.id} className="flex items-center justify-center">
                        <div className="flex align-center items-center bg-black bg-opacity-40 p-4 rounded-lg shadow-md mx-2">
                            {/* Dividimos el texto por salto de línea y usamos <br> para renderizar */}
                            <p className="text-white">
                                {card.text.split('\n').map((line, index) => (
                                    <span key={index}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CartProfile;
