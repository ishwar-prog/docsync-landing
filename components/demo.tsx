'use client';

import { GLSLHills } from "@/components/ui/glsl-hills";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function DemoOne() {
  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden">
      <div className="space-y-6 pointer-events-none z-10 text-center absolute flex flex-col items-center">
        <Image 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" 
          alt="Abstract geometric shape" 
          width={120} 
          height={120} 
          className="rounded-full object-cover mb-4 border border-white/20"
        />
        <h1 className="font-semibold text-7xl whitespace-pre-wrap">
          <span className="italic text-6xl font-thin">Designs That Speak <br/> </span>
          Louder Than Words
        </h1>
        <p className="text-sm text-primary/60 text-white/80">
          We craft stunning visuals and user-friendly experiences that <br/> help your brand stand out and connect with your audience.
        </p>
        <button className="flex items-center gap-2 px-6 py-3 cursor-pointer pointer-events-auto bg-white/10 hover:bg-white/20 transition-colors border border-white/20 rounded-full text-white">
          Get Started <MoveRight className="w-4 h-4" />
        </button>
      </div> 
    </div>
  )
}