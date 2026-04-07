"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
      className="flex justify-center md:mx-18 items-center rounded-[1.9rem] bg-(--text-primary) px-6 py-12 sm:px-8"
    >
      <div className="flex px-10 gap-10 justify-center items-center flex-col text-center">
        <h1 className="left-content max-w-[20ch] md:text-3xl text-md font-bold text-(--text-secondary) leading-snug">
          Connect your finance with Carty
        </h1>

        <Button className="mt-6 flex cursor-pointer items-center gap-2 rounded-full bg-(--bg-primary) px-5 py-2 text-xs font-bold uppercase tracking-wide text-(--text-primary) hover:bg-(--bg-primary) transition">
          Contact Us
        </Button>

        <div className="right-content flex md:flex-row flex-col md:gap-90 gap-6">
          <div className="flex justify-center items-center gap-1">
            <Badge className="flex items-center gap-2 rounded-full bg-(--bg-primary) px-5 py-2 text-xs font-bold uppercase tracking-wide text-(--text-primary) hover:bg-(--bg-primary) transition">
              Personal
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide text-(--text-secondary) transition">
              Business
            </Badge>
          </div>
          <div className="flex justify-center md:gap-1 gap-0 items-center">
            <Button className="text-(--text-secondary)">Features</Button>
            <Button className="text-(--text-secondary)">Pricing</Button>
            <Button className="text-(--text-secondary)">Help</Button>
            <Button className="text-(--text-secondary)">EN</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
