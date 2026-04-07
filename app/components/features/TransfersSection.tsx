"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function TransfersSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".transfer",
        { x: 150, opacity: 0, scale: 0.9 }, 
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current, 
            start: "top 80%",            
            toggleActions: "restart none restart none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transfers"
      className="flex md:justify-around justify-center items-center rounded-[1.9rem] bg-(--color-background) px-6 py-12 sm:px-8"
    >
      <div className="flex px-10 justify-center items-center flex-col text-center">
        <h2 className="max-w-[20ch] text-3xl font-bold text-(--text-secondary) leading-snug">
          International payments for your business
        </h2>

        <p className="mt-4 max-w-[40ch] text-sm text-(--text-secondary)/70 leading-relaxed">
          Join thousands of businesses saving on fees with fast local and
          international transfers
        </p>

        <Button className="mt-6 flex items-center gap-2 rounded-full bg-(--bg-primary) px-5 py-2 text-xs font-bold uppercase tracking-wide text-(--text-primary) hover:bg-[#a0e84d] transition">
          Get Started
        </Button>
      </div>

      <div className="max-w-100">
        <Image
          src="/landing-assets/transfer.png"
          alt="Explore More"
          width={829}
          height={800}
          className="transfer md:block hidden w-full h-auto rounded-[1.15rem]"
          priority
        />
      </div>
    </section>
  );
}
