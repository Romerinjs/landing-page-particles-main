"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import { useRouter } from 'next/navigation';

const AboutMePage = () => {
    const router = useRouter();

    const handleLogin = () => {
        router.push('/login'); // Change '/login' to the path of your login page
    };

    return (
        <>
            <TransitionPage />
            <div className="relative">
               
            </div>
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Optimize your{' '}
                    <span className="font-bold text-secondary">
                        BUSINESS
                    </span>
                </h1>

                <p className="mt-4 text-center md:text-left">
                    Our <span className="font-bold text-secondary">Boost Your Business</span> bot is designed to
                    automate tasks and optimize processes, thereby facilitating the management of your business. With advanced
                    customer service features and data analysis, our bot will help you improve efficiency and provide
                    exceptional service.
                </p>

                <CounterServices />

                <TimeLine />
            </ContainerPage>
        </>
    );
}

export default AboutMePage;
