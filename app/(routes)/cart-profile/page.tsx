"use client"; // Ensure this component behaves as a Client Component
import { CoverParticles } from "@/components/cover-particles";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../lib/firebaseConfig';
import { User } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Ensure to import Swiper styles
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import TransitionPage from "@/components/transition-page"; // Import TransitionPage component

// Install the Autoplay module
SwiperCore.use([Autoplay]);

const flashCardsData = [
    { id: 1, text: 'Quick Tip:\nDon’t forget to breathe before exerting yourself.' },
    { id: 2, text: 'Quick Tip:\nBe aware of the limits: Remember that bots have limitations and may not understand all requests, especially if they are very abstract or emotional. Adjust your expectations accordingly.' },
    { id: 3, text: 'Quick Tip:\nBe patient: If the bot doesn’t respond immediately or doesn’t understand the request, try rephrasing it or providing more context.' },
    { id: 4, text: 'Quick Tip:\nUse keywords: If you are looking for specific information, include the most relevant keywords. Bots are often designed to recognize important terms.' },
];

const CartProfile = () => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                router.push('/'); // Redirect to the home page if no user is logged in
            }
        });

        return () => unsubscribe(); // Cleanup subscriber
    }, [router]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/'); // Ensure it redirects to the correct route
        } catch (error) {
            console.error("Error logging out:", error); // Print any error
        }
    };

    if (!user) {
        return null; // Show nothing while determining authentication status
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
            
            <h1 className="text-3xl font-bold mb-8">Welcome, {user.email}!</h1>
            <p className="mb-4">Click here to download the file:</p>
            <a href="/path/to/file" className="px-4 py-2 mt-4 bg-blue-600 hover:bg-blue-500 transition-colors duration-300 rounded-md">
                Download File
            </a>

            {/* Flash Cards using Swiper */}
            <Swiper
                spaceBetween={50} // Space between cards
                slidesPerView={1} // Number of visible cards
                loop={true} // Repeat cards
                autoplay={{
                    delay: 3000, // Change every 3 seconds
                    disableOnInteraction: false, // Keep autoplay even after user interaction
                }}
                className="mt-8 w-full max-w-lg"
            >
                {flashCardsData.map((card) => (
                    <SwiperSlide key={card.id} className="flex items-center justify-center">
                        <div className="flex align-center items-center bg-black bg-opacity-40 p-4 rounded-lg shadow-md mx-2">
                            {/* Split the text by line break and use <br> to render */}
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
