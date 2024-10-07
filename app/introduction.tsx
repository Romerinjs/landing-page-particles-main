import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebaseConfig';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Introduction = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Login successful. Redirecting to /cart-profile");
            router.push('/cart-profile');
        } catch (error) {
            console.error('Login error', error);
        }
    };

    if (!isClient) {
        return null;
    }

    return (
        <div className="z-20 w-full bg-darkBg/60 relative">
            <div className="absolute top-4 right-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Link href="/buy-account">
                    <button className="px-4 py-2 border bg-transparent hover:bg-[#004aad] transition-colors duration-200 rounded-md">
                        Buy an Account
                    </button>
                </Link>
            </div>
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width={800} height={800} alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Our Advantages, <br />
                        <TypeAnimation
                            sequence={[
                                ' automate your business',
                                600,
                                'optimize your business',
                                600,
                                'improve your productivity',
                                600,
                                'simplify your tasks',
                                600
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>
                    <p className="mx-auto mb-1 text-xl md:text-xl md:mx-0 md:mb-8">
                        Access your business profile. With a single login, you can efficiently manage your processes, saving time and resources.
                    </p>

                    {/* Login Form */}
                    <div className="mb-10">
                        <h2 className="text-xl font-bold text-center text-secondary">Login</h2>
                        <form onSubmit={handleLogin} className="flex flex-col items-center gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                                className="p-2 border border-gray-300 rounded-md w-full max-w-sm text-black placeholder:text-gray-400"
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="p-2 border border-gray-300 rounded-md w-full max-w-sm text-black placeholder:text-gray-400"
                            />
                            <button type="submit" className="px-4 py-2 mt-4 text-white border border-[#004aad] hover:bg-[#004aad] hover:text-white transition-colors duration-300 rounded-md hover:bg-opacity-80">
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
