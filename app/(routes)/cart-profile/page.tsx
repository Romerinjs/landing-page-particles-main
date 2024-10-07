"use client";

import { CoverParticles } from "@/components/cover-particles";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../lib/firebaseConfig';
import { getStorage, ref, getDownloadURL } from "firebase/storage"; // Importar Firebase Storage
import { User } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import TransitionPage from "@/components/transition-page";

// Instalar el módulo Autoplay para Swiper
SwiperCore.use([Autoplay]);

const flashCardsData = [
    { id: 1, text: 'Quick Tip:\nDon’t forget to breathe before exerting yourself.' },
    { id: 2, text: 'Quick Tip:\nBe aware of the limits: Remember that bots have limitations and may not understand all requests, especially if they are very abstract or emotional. Adjust your expectations accordingly.' },
    { id: 3, text: 'Quick Tip:\nBe patient: If the bot doesn’t respond immediately or doesn’t understand the request, try rephrasing it or providing more context.' },
    { id: 4, text: 'Quick Tip:\nUse keywords: If you are looking for specific information, include the most relevant keywords. Bots are often designed to recognize important terms.' },
];

const CartProfile = () => {
    const [user, setUser] = useState<User | null>(null);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null); // Estado para la URL de descarga
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                router.push('/'); // Redirigir si no hay usuario autenticado
            }
        });

        // Obtener URL del archivo PNG de Firebase Storage
        const fetchDownloadUrl = async () => {
            try {
                const storage = getStorage(); // Obtener instancia de Storage
                const fileRef = ref(storage, '/VBCABLE_Driver_Pack43.zip'); // Cambiar a la ruta de tu archivo en Storage
                const url = await getDownloadURL(fileRef);
                console.log("Download URL:", url);
                setDownloadUrl(url); // Guardar la URL de descarga
            } catch (error) {
                console.error("Error fetching download URL:", error);
            }
        };

        fetchDownloadUrl();

        return () => unsubscribe(); // Cleanup suscriptor
    }, [router]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/'); // Redirigir al logout
        } catch (error) {
            console.error("Error logging out:", error); // Imprimir error
        }
    };

    // Función para manejar la descarga manual
    const handleDownload = () => {
        if (downloadUrl) {
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', 'VBCABLE_Driver_Pack43.zip'); // Nombre del archivo
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Eliminar el enlace tras la descarga
        }
    };

    if (!user) {
        return null; // Mostrar nada mientras se verifica la autenticación
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#004aad] to-[#001c69] text-white">
            <CoverParticles />
            <TransitionPage />

            <div className="absolute top-4 right-4">
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 hover:bg-red-800 transition-colors duration-200 rounded-md">
                    Log Out
                </button>
            </div>
            
            <h1 className="text-3xl font-bold mb-8">Welcome, {user.email}!</h1>
            <p className="mb-4">Click here to download the file:</p>

            {/* Botón de descarga */}
            {downloadUrl ? (
                <button
                    onClick={handleDownload} // Llama a la función de descarga
                    className="px-4 py-2 mt-4 bg-blue-600 hover:bg-blue-500 transition-colors duration-300 rounded-md"
                >
                    Download File
                </button>
            ) : (
                <p>Loading download link...</p> // Mostrar mientras se carga la URL
            )}

            {/* Flash Cards usando Swiper */}
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="mt-8 w-full max-w-lg"
            >
                {flashCardsData.map((card) => (
                    <SwiperSlide key={card.id} className="flex items-center justify-center">
                        <div className="flex align-center items-center bg-black bg-opacity-40 p-4 rounded-lg shadow-md mx-2">
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
