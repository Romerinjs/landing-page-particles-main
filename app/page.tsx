"use client"

import { CoverParticles } from "@/components/cover-particles";
import Introduction from "@/app/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <link rel="icon" href="/favicon.ico" />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}