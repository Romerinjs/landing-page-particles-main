"use client";

import Image from "next/image";
import { MotionTransition } from "./transition-component";

export function BotInf() {
    return (
        <MotionTransition position="bottom" className="bottom-100 py-12 right-5 hidden md:inline-block md:absolute mb-10"> {/* Cambié la clase bottom-0 a bottom-8 y añadí mb-10 */}
            <Image src="/bot-image.png" width="600" height="550" className="w- h-" alt="Particles" />
        </MotionTransition>
    );
}
