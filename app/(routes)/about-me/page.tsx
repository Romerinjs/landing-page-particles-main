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
        router.push('/login'); // Cambia '/login' por la ruta de tu página de inicio de sesión
    };

    return (
        <>
            <TransitionPage />
            <div className="relative">
               
            </div>
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Optimiza tu{' '}
                    <span className="font-bold text-secondary">
                        NEGOCIO
                    </span>
                </h1>

                <p className="mt-4 text-center md:text-left">
                    Nuestro bot de <span className="font-bold text-secondary">Boost Your Business</span> está diseñado para
                    automatizar tareas y optimizar procesos, facilitando así la gestión de tu negocio. Con funciones avanzadas
                    de atención al cliente y análisis de datos, nuestro bot te ayudará a mejorar la eficiencia y a ofrecer
                    un servicio excepcional.
                </p>

                <CounterServices />

                <TimeLine />
            </ContainerPage>
        </>
    );
}

export default AboutMePage;
