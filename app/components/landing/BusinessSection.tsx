"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hover } from "@/app/data/landing-content";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function BusinessSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".card-left", {
        x: -300,
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".card-right", {
        x: 300,
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".card-full", {
        y: -300,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="bg-black text-white px-6 md:px-16 py-20"
    >
      <div className="text-center mb-16">
        <p className="text-sm text-gray-400">Teamwork makes the dream work</p>

        <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
          Discover the meaning of efficiency <br />
          with Univers Business
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        <div className="card-left bg-(--bg-primary) text-(--text-primary) rounded-3xl p-6 flex flex-col justify-between min-h-80">
          <div>
            <h3 className="text-xl font-bold">
              Send and receive without borders
            </h3>
            <p className="mt-2 text-sm opacity-70">Explore Payments</p>
          </div>
          <div className="flex justify-center mt-6">
            <Image
              src="/landing-assets/payment.png"
              alt="payment"
              width={200}
              height={200}
              className="rounded-xl"
            />
          </div>
        </div>

        
        <div className="card-right bg-(--color-background) rounded-3xl p-6 flex flex-col justify-between min-h-80">
          <div>
            <h3 className="text-xl font-semibold">
              Invoices that work smarter
            </h3>
            <p className="mt-2 text-sm text-green-400">
              Learn more about Invoices
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <Image
              src="/landing-assets/invoice.png"
              alt="invoice"
              width={220}
              height={200}
            />
          </div>
        </div>


        <div className="card-left bg-(--color-background) rounded-3xl p-6 flex flex-col justify-between min-h-80">
          <div>
            <h3 className="text-xl font-semibold">
              Smart company debit cards help you and your team go further
            </h3>
            <p className="mt-2 text-sm text-(--color-primary)">
              Learn more about Cards
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <Image
              src="/landing-assets/cards.png"
              alt="cards"
              width={260}
              height={200}
            />
          </div>
        </div>

        
        <div className="card-right bg-(--color-background) rounded-3xl p-6 flex flex-col justify-between min-h-80">
          <div>
            <h3 className="text-xl font-semibold">
              Exchange, send and spend at great rates
            </h3>
          </div>
          <p className="text-(--color-neutral) mt-4 text-sm inline-flex items-center gap-1">
            Explore Exchanges <ArrowRight />
          </p>
        </div>


        <div className="card-full md:col-span-2 bg-(--color-background) rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-semibold">
              Set and change team permissions with a tap
            </h3>
            <p className="text-gray-400 mt-4 max-w-md text-sm">
              Stay in total control of your teams spending by managing their
              permissions and levels of access. Create custom roles and choose
              the combination of apps and features you want them to use
            </p>
            <p className="text-(--color-neutral) mt-4 text-sm inline-flex items-center gap-1">
              Discover Revolut Business <ArrowRight />
            </p>
          </div>
          <Image
            src="/landing-assets/transfers.png"
            alt="permissions"
            width={260}
            height={220}
          />
        </div>
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Control all your spend <br /> with smart rules
        </h2>

        <div className="mt-10 flex flex-col items-center gap-4">
          {hover.map((item, i) => (
            <div
              key={i}
              className="w-[320px] flex justify-between bg-gray-200 text-black px-4 py-3 rounded-xl 
                 transform transition-transform duration-500 hover:scale-120"
            >
              <span>{item.title}</span>
              <span>{item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
