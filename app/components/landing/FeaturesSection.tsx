"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featureCard } from "@/app/data/landing-content";
import { ArrowRight, PlayIcon } from "lucide-react";
import { ImpressionSection } from "../features/ImpressionSection";
import { TransfersSection } from "../features/TransfersSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
   
    if (playRef.current && containerRef.current) {
      gsap.fromTo(playRef.current, 
        { x: 0, opacity: 0, scale: 0.5 },
        {
          x: 120,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(0.5)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

  }, []);

  return (
    <section className="bg-(--color-secondary) px-4 py-12 text-(--text-primary) shadow-[0_22px_70px_rgba(0,0,0,0.08)] sm:px-5">
      <div className="flex md:flex-row flex-col gap-4 sm:grid-cols-[0.92fr_1.08fr] sm:items-start px-10">
        
        <div className="w-[50%]">
          <h2 className="max-w-[10ch] text-[2.8rem] font-black leading-[0.94] tracking-[0.1rem]">
            We keep your money safe
          </h2>

          <p className="mt-3 max-w-[28ch] text-[0.9rem] leading-5 text-(--text-primary)/55">
            Keep your money safe with our anti-fraud system. All our cards
            support 3D Secure.
          </p>

          
          <div ref={containerRef} className="relative mt-5 flex items-center overflow-visible">
            <Button asChild className="relative z-20 rounded-full bg-(--bg-primary) px-5 py-2 text-[0.9rem] font-black text-(--text-primary)">
              <a href="#support">
                See how
              </a>
            </Button>

            <Button
              ref={playRef}
              type="button"
              variant="outline"
              size="icon"
              className="absolute left-0 z-10 flex h-9 w-9 items-center justify-center 
                         rounded-full bg-(--color-accent) text-(--text-secondary)" 
            >
              <PlayIcon size={16} fill="currentColor" />
            </Button>
          </div>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-3">
          {featureCard.map((card, index) => (
            <Card key={index} className="flex flex-col min-h-26 rounded-[1.15rem] gap-3 bg-[#D7D7D7] p-3">
              <CardHeader className="p-0">
                <CardTitle className="text-[0.9rem] font-black">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-[0.9rem]">
                {card.content}
                <div className="flex items-center gap-1 text-xs mt-2">
                  <span>{card.button}</span>
                  <ArrowRight size={14} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

     
      <div className="mt-10 px-18"><ImpressionSection /></div>
      <div className="mt-10 px-18"><TransfersSection /></div>
    </section>
  );
}
