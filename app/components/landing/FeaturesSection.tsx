'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { featureCard, stats } from '@/app/data/landing-content';
import { ArrowRight, PlayIcon } from 'lucide-react';
import { ImpressionSection } from '../features/ImpressionSection';
import { TransfersSection } from '../features/TransfersSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (playRef.current && containerRef.current) {
      gsap.fromTo(
        playRef.current,
        { x: 0, opacity: 0, scale: 0.5 },
        {
          x: 120,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(0.5)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play reverse play reverse',
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
            start: 'top 90%',
            toggleActions: 'play reverse play reverse',
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
          <p className="mt-3 max-w-[28ch] text-1 font-medium leading-5 text-(--text-primary)/55">
            Keep your money safe with our anti-fraud system. All our cards
            support 3D Secure and our contactless card limits help fight
            contactless fraud
          </p>

          <div
            ref={containerRef}
            className="relative mt-5 flex items-center overflow-visible"
          >
            <Button
              asChild
              className="relative z-20 rounded-full bg-(--bg-primary) px-5 py-2 text-[0.9rem] font-black text-(--text-primary)"
            >
              <a href="#support">See how</a>
            </Button>

            <Button
              ref={playRef}
              type="button"
              variant="outline"
              size="icon"
              className="absolute left-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-(--color-accent) text-(--text-secondary)"
            >
              <PlayIcon size={16} fill="currentColor" />
            </Button>
          </div>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-3">
          {featureCard.map((card, index) => (
            <Card
              key={index}
              className="group flex w-60 h-60 flex-col min-h-26 rounded-xl gap-3 
                  bg-(--bg-secondary) p-3 cursor-pointer 
                  transform transition-transform duration-1000 ease-out 
                  hover:bg-black hover:text-white"
            >
              <CardHeader className="p-0">
                <CardTitle className="text-[0.9rem] font-black transition-colors duration-500 group-hover:text-white">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-[0.9rem] transition-colors duration-500 group-hover:text-white">
                {card.content}
                <div className="flex  items-center gap-1 text-xs mt-15">
                  <span>{card.button}</span>
                  <ArrowRight size={14} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 px-10">
        <div className="flex md:flex-row flex-col justify-around">
          <h2 className="text-[2.5rem] max-w-[15ch] font-black leading-tight">
            Get to know more about Univers
          </h2>
          <p className="mt-3 max-w-[40ch] text-[0.95rem] leading-5 text-(--text-primary)/70">
            We are a customer-focused digital bank that provides complete
            financial solutions to meet your entire financial needs.
          </p>
        </div>

        <div className="mt-8 flex md:flex-row flex-col justify-evenly gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative w-60 h-40 rounded-3xl  bg-(--bg-secondary) overflow-hidden group"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300 group-hover:opacity-0">
                <div className="text-[2rem] font-black text-(--text-primary)">
                  {stat.value}
                </div>
                <p className="text-sm text-(--text-primary)">{stat.label}</p>
              </div>

              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-(--color-background) text-(--text-secondary) 
                        transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-out"
              >
                <div className="text-[2rem] font-black">{stat.value}</div>
                <p className="text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 md:px-18">
        <ImpressionSection />
      </div>
      <div className="mt-10 md:px-18">
        <TransfersSection />
      </div>
    </section>
  );
}
