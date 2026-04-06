"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ContactFooter() {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
     
      gsap.from(".left-content", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%", 
          toggleActions: "play none none reset",
        },
      });

      
      gsap.from(".right-content", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={footerRef}
      id="transfers"
      className="flex justify-center items-center rounded-[1.9rem] bg-(--text-primary) px-6 py-12 sm:px-8"
    >
      <div className="flex px-10 gap-10 justify-center items-center flex-col text-center">
        <h1 className="left-content max-w-[20ch] text-3xl font-bold text-(--text-secondary) leading-snug">
          Connect your finance with Carty
        </h1>

        <button className="mt-6 flex items-center gap-2 rounded-full bg-(--bg-primary) px-5 py-2 text-xs font-bold uppercase tracking-wide text-(--text-primary) hover:bg-(--bg-primary) transition">
          Contact Us
        </button>

        <div className="right-content flex md:gap-100">
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-2 rounded-full bg-(--bg-primary) px-5 py-2 text-xs font-bold uppercase tracking-wide text-(--text-primary) hover:bg-(--bg-primary) transition">
              Personal
            </div>
            <div className="flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide text-(--text-secondary) transition">
              Business
            </div>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <div className="text-(--text-secondary)">Features</div>
            <div className="text-(--text-secondary)">Pricing</div>
            <div className="text-(--text-secondary)">Help</div>
            <div className="text-(--text-secondary)">EN</div>
          </div>
        </div>
      </div>
    </section>
  );
}
