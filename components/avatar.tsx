"use client";

import Image from "next/image";
import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="bottom- -60 right-0 hidden md:inline-block md:absolute mb-10"> {/* Cambié la clase bottom-0 a bottom-8 y añadí mb-10 */}
            <Image src="/avatar-1.png" width="550" height="550" className="w- h-" alt="Particles" />
        </MotionTransition>
    );
}
