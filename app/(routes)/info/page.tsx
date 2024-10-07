"use client";

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import ContainerPage from "@/components/container-page";
import { BotInf } from "@/components/bot-inf"; // Asegúrate de que esté correctamente importado
import TransitionPage from "@/components/transition-page";

export default function BotInfo() {
  return (
    <>
      {/* Transition Effect */}
      <TransitionPage />
      
      {/* BotInf Component */}
      <BotInf /> {/* Llamando al componente aquí */}
      
      {/* Main Content */}
      <div className="relative">
        <ContainerPage>
          {/* Header Section */}
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
            Meet Our <span className="font-bold text-secondary">BOT</span>
          </h1>

          <p className="mt-4 text-center text-lg md:text-left">
            Our bot is designed to streamline your workflow, automate repetitive tasks, and provide instant assistance whenever you need it.
          </p>
          <p className=" text-center text-lg md:text-left">Here is where you gonna write all the information about the bot, idk what the hell im going to write but this a basic example of how to use this line.</p>
          <p className=" text-center text-lg md:text-left">
            Lets write more information just to try the flex prop, saying something like hi my nigga i am using it right now</p>
          <p className=" text-center text-lg md:text-left">
            Another line just trying to use this line</p>

          <div className="z-20 flex flex-col md:flex-row items-center h-full p-6 py-20 md:py-0">
            {/* Text Section */}
            <div className="flex flex-col justify-center max-w-md w-full order-2 md:order-1 md:text-left md:w-1/2">
              {/* Bot Features Section */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-center text-secondary mb-4">Bot Features</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-secondary">✓</span>
                    24/7 Availability
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-secondary">✓</span>
                    Natural Language Processing
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-secondary">✓</span>
                    Task Automation
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-secondary">✓</span>
                    Data Analysis and Reporting
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-secondary">✓</span>
                    Integration with Multiple Platforms
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center w-full order-1 mb-8 md:mb-0 opacity-0 md:order-2 md:w-1/2">
              <Image
                src="/bot-image.png"
                priority
                width={800}
                height={800}
                alt=""
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </ContainerPage>
      </div>
    </>
  );
}
