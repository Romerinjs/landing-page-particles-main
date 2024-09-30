// app/cart-profile/page.tsx
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

const flashCardsData = [
    { id: 1, image: '/auto-1.png', text: 'Automatización de procesos de negocio' },
    { id: 2, image: '/servicio-1.png', text: 'Optimización de la atención al cliente' },
    { id: 3, image: '/analisis-1.png', text: 'Análisis de datos para toma de decisiones' },
    { id: 4, image: '/marketing-1.png', text: 'Mejoras en marketing digital' },
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
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#004aad] to-[#001c69] text-white relative">
            <CoverParticles /> {/* Asegúrate de que las partículas se muestren aquí */}
            <TransitionPage /> {/* Añadir TransitionPage aquí */}
            <button
                onClick={handleLogout}
                className="absolute top-8 right-4 px-4 py-2 bg-red-600 hover:bg-red-500 transition-colors duration-200 rounded-md"
            >
                Log Out
            </button>
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
                    delay: 5000, // Cambia cada 5 segundos
                    disableOnInteraction: false, // Mantiene autoplay incluso después de la interacción del usuario
                }}
                className="mt-8 w-full max-w-lg"
            >
                {flashCardsData.map((card) => (
                    <SwiperSlide key={card.id} className="flex items-center justify-center">
                        <div className="flex items-center bg-black bg-opacity-80 p-4 rounded-lg shadow-md mx-2">
                            <img 
                                src={card.image} 
                                alt={`Flash card ${card.id}`} 
                                className="w-24 h-24 rounded-full mr-4 object-cover" // Cambiar dimensiones aquí
                            />
                            <p className="text-white">{card.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CartProfile;
