"use client";
import Image from "next/image";
import { audienceTabs, navLinks } from "@/app/data/landing-content";
import { PlayIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
  if (!heroRef.current) return;

  const ctx = gsap.context(() => {
    gsap.fromTo(".card",
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",  
          toggleActions: "play reverse play reverse"
        }
      }
    );
  }, heroRef);

  return () => ctx.revert();
}, []);


  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="relative overflow-hidden rounded-[1.9rem] border border-white/8 bg-(--color-background) px-4 pb-5 pt-4 shadow-[0_24px_90px_rgba(0,0,0,0.4)] sm:px-5"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(72,255,224,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(72,255,224,0.12)_1px,transparent_1px)] bg-size-[56px_56px] opacity-30" />
    

      <header className="relative z-10 mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[0.72rem] font-semibold text-(--text-secondary)">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/70">
              <span className="h-2.5 w-2.5 rounded-full border border-white/80" />
            </span>
            <span>Univers</span>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            {audienceTabs.map((tab, index) => (
              <span
                key={tab}
                className={`rounded-full px-2.5 py-1 text-[0.7rem] font-bold ${
                  index === 0
                    ? "bg-(--bg-primary) text-(--text-primary)"
                    : "bg-(--color-secondaryt)/8 text-(--text-secondary)/75"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-3 text-[0.7rem] text-(--text-secondary)/70 sm:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <span className="rounded-full border border-white/10 px-2 py-1 text-[0.58rem] font-bold text-(--text-secondary)">
            EN
          </span>
        </div>
      </header>

      <div className="relative z-10 flex md:flex-row flex-col md:mt-0 mt-10 justify-evenly px-6 pt-14">
        <div className="max-w-56 pt-1">
          <h1 className="text-[8rem] font-black leading-[0.8] tracking-[-0.08em] sm:text-[2.35rem]">
            Digitize your univers bank
          </h1>
        </div>

        <div className="max-w-50">
          <p className="text-[1rem] leading-4 tracking-tight text-(--text-secondary)/60">
            Money should be easy, it is time to say goodbye to banks and
            financial services companies that do not work for you.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-(--bg-primary) px-4 py-2 text-[0.66rem] font-black text-(--text-primary) transition-transform duration-300 hover:scale-[1.02]"
            >
              Digitize Now
            </a>
           
            <button
              type="button"
              aria-label="Play introduction video"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-(--color-secondary)/12 text-(--text-secondary) will-change-transform"
              style={{ opacity: 8 }}
            >
              <PlayIcon className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3 text-(--text-secondary)">
            <div className="flex -space-x-2">
              {[0, 1, 2].map((avatar) => (
                <span
                  key={avatar}
                  className="h-7 w-7 rounded-full border-2 border-[#050505] bg-linear-to-br from-[#5f5d5d] to-[#767676]"
                />
              ))}
            </div>
            <div>
              <div className="text-[1.35rem] font-black leading-none tracking-[-0.08em]">
                16M
              </div>
              <p className="text-[0.6rem] text-(--text-secondary)/45">
                of transactions ended this month
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto my-8 flex h-48 w-full items-end justify-center sm:h-56">
        <div className="card absolute left-[12%] top-[4%] w-[37%] rotate-50">
          <div className="rounded-[1.35rem]">
            <Image
              src="/landing-assets/card-blue.png"
              alt="Blue Univers card"
              width={693}
              height={540}
              className="h-auto w-full rounded-[1.15rem]"
              priority
            />
          </div>
        </div>

        <div className="card absolute left-1/2 top-[5%] z-20 w-[44%] md:-rotate-50 -translate-x-1/2">
          <div className="rounded-[1.45rem] ">
            <Image
              src="/landing-assets/card-orange.png"
              alt="Orange Univers card"
              width={828}
              height={755}
              className="h-auto w-full rounded-[1.2rem]"
              priority
            />
          </div>
        </div>

        <div className="card absolute right-[12%] top-[10%] z-10 w-[37%] rotate-3">
          <div className="rounded-[1.35rem] ">
            <Image
              src="/landing-assets/card-green.png"
              alt="Green Univers card"
              width={884}
              height={760}
              className="h-auto w-full rounded-[1.15rem]"
              priority
            />
          </div>
        </div>

        <div className="card absolute -bottom-10 left-1/2 z-30 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border-[6px] border-[#050505] bg-(--color-background) shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-(--bg-primary) text-sm text-(--text-primary)">
            <Image
              src="/landing-assets/explore-more.png"
              alt="Explore More"
              width={1500}
              height={1500}
              className="h-auto w-full rounded-[1.15rem]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}