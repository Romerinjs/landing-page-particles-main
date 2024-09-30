"use client";
import Head from "next/head";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <>
            <Head>
                <link rel="icon" href="/iconito.ico" />
                <title>Boost Your Business</title>
                <meta name="description" content="Descripción de tu negocio" />
            </Head>
            <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
                <header className="mb-20"> {/* Añadido margen inferior */}
                    <div className="container flex flex-col justify-between max-w-6xl mx-auto space-y-6 md:space-y-0 md:flex-row md:items-center">
                        <Link href='/'>
                            <h2 className="my-1 text-4xl font-bold text-center md:text-left">
                                Boost Your <br /> {/* Añadido salto de línea */}
                                <span className="text-secondary">Business</span>
                            </h2>
                       
                        </Link>
                    </div>
                </header>
            </MotionTransition>
        </>
    );
}

export default Header;