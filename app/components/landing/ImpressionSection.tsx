"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ImpressionSection() {
  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      ".impression-img",
      { y: 80, opacity: 0, scale: 0.8, visibility: "hidden" },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        visibility: "visible",
        duration: 5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#transfers",
          start: "top bottom",
          toggleActions: "play none none reset",
        },
      }
    );
  });

  return () => ctx.revert();
}, []);


  return (
    <section
      id="transfers"
      className="flex items-center rounded-[1.9rem] bg-(--color-background) px-6 py-12 sm:px-8"
    >
      <div className="flex px-10 justify-center items-center flex-col text-center">
        <h2 className="max-w-[20ch] text-3xl font-bold text-(--text-secondary) leading-snug">
          Make an impression with metal
        </h2>

        <p className="mt-4 max-w-[40ch] text-sm text-(--text-secondary)/70 leading-relaxed">
          Get our iconic metal cards forged from stainless steel, for you and
          your power players. Add your company name to the front for an extra
          professional touch. Exclusively for paid plans. Subject to additional
          fees.
        </p>

        <button className="mt-6 flex items-center gap-2 rounded-full bg-(--bg-primary) px-5 py-2 text-xs font-bold uppercase tracking-wide text-(--text-primary) hover:bg-(--bg-primary) transition">
          Order a metal card
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

  
      <Image
        src="/landing-assets/hand.png"
        alt="Explore More"
        width={1500}
        height={1500}
        className="impression-img md:block hidden h-auto w-full rounded-[1.15rem]"
        priority
      />
    </section>
  );
}
