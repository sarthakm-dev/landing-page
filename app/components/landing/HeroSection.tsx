'use client';
import Image from 'next/image';
import { audienceTabs, navLinks } from '@/app/data/landing-content';
import { PlayIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.card',
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="relative bg-(--color-background) px-4 pb-20 pt-4 shadow-[0_24px_90px_rgba(0,0,0,0.4)] sm:px-5  border-x-12 border-white"
    >
      <svg className="w-0 h-0 absolute">
        <defs>
          <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,1 L 0.56,1 Q 0.5,1.10 0.44,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

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
              <Badge
                key={tab}
                variant={index === 0 ? 'default' : 'secondary'}
                className={`rounded-full px-2.5 py-1 text-[0.7rem] font-bold ${
                  index === 0
                    ? 'bg-(--bg-primary) text-(--text-primary)'
                    : 'bg-(--color-secondaryt)/8 text-(--text-secondary)/75'
                }`}
              >
                {tab}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-3 text-[0.7rem] text-(--text-secondary)/70 sm:flex">
            {navLinks.map(link => (
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

      <div className="relative z-10 flex flex-col justify-evenly px-6 pt-14 md:flex-row md:mt-0 mt-10">
        <div className="max-w-100 pt-1">
          <h1 className="md:text-[4rem] max-w-[8ch] font-black leading-[1.1] tracking-[-0.08em] text-[4rem]">
            Digitize your univers bank
          </h1>
        </div>

        <div className="max-w-90">
          <p className="md:text-[1.5rem] text-[2rem] mt-4 md:mt-0 md:leading-6 max-w-[50ch] leading-9 tracking-tight text-(--text-secondary)/60">
            Money should be easy, it is time to say goodbye to banks and
            financial services companies that do not work for you.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <Button
              asChild
              className="rounded-full bg-(--bg-primary) px-4 py-2 text-[0.66rem] font-black text-(--text-primary) transition-transform duration-300 hover:scale-[1.02]"
            >
              <a href="#contact">Digitize Now</a>
            </Button>

            <Button
              type="button"
              aria-label="Play introduction video"
              variant="outline"
              size="icon"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-(--color-secondary)/12 text-(--text-secondary) will-change-transform"
              style={{ opacity: 0.8 }}
            >
              <PlayIcon className="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-3 text-(--text-secondary)">
            <div className="flex -space-x-2">
              {[0, 1, 2].map(avatar => (
                <Avatar
                  key={avatar}
                  className="h-7 w-7 border-2 border-[#050505]"
                >
                  <AvatarFallback className="bg-linear-to-br from-[#5f5d5d] to-[#767676]" />
                </Avatar>
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
        <div className="card absolute left-[12%] top-[4%] w-[37%] rotate-50 ">
          <Image
            src="/landing-assets/card-blue.png"
            alt="Blue Univers card"
            width={693}
            height={540}
            className="h-auto w-full rounded-[1.15rem]"
            priority
          />
        </div>

        <div className="card z-20 absolute left-1/2 top-[5%] w-[44%] -translate-x-1/2 md:-rotate-50">
          <Image
            src="/landing-assets/card-orange.png"
            alt="Orange Univers card"
            width={828}
            height={755}
            className="h-auto w-full rounded-[1.2rem]"
            priority
          />
        </div>

        <div className="card z-10 absolute right-[12%] top-[10%] w-[37%] rotate-3">
          <Image
            src="/landing-assets/card-green.png"
            alt="Green Univers card"
            width={884}
            height={760}
            className="h-auto w-full rounded-[1.15rem]"
            priority
          />
        </div>

        <div className="absolute -bottom-35 left-1/2 z-40 -translate-x-1/2">
          <div className="flex h-24 w-24 items-center justify-center rounded-full  bg-[#050505] shadow-lg">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-(--bg-primary) overflow-hidden transition-transform hover:scale-105">
              <Image
                src="/landing-assets/explore-more.png"
                alt="Explore More"
                width={1500}
                height={1500}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
