import { featureCard, stats } from "@/app/data/landing-content";
import { ArrowRight, PlayIcon } from "lucide-react";
import { ImpressionSection } from "./ImpressionSection";
import { TransfersSection } from "./TransfersSection";
export function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-(--color-secondary) px-4 py-12 text-(--text-primary) shadow-[0_22px_70px_rgba(0,0,0,0.08)] sm:px-5"
    >
      <div className="flex gap-4 sm:grid-cols-[0.92fr_1.08fr] sm:items-start px-10">
        <div className="w-[50%]">
          <h2 className="max-w-[10ch] text-[2.8rem] font-black leading-[0.94] tracking-[0.1rem]">
            We keep your money safe
          </h2>
          <p className="mt-3 max-w-[28ch] text-[0.9rem] leading-5 text-(--text-primary)/55">
            Keep your money safe with our anti-fraud system. All our cards
            support 3D Secure and contactless card limits to help fight
            contactless fraud.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <a
              href="#support"
              className="rounded-full bg-(--bg-primary) px-4 py-2 text-[0.9rem] font-black text-(--text-primary)"
            >
              See how
            </a>
            <button
              type="button"
              aria-label="Watch security overview"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-(--color-accent) text-(--text-secondary)"
            >
              <span className="ml-0.5 bg-(--color-accent) text-xs"><PlayIcon></PlayIcon></span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {featureCard.map((card, index) => (
            <article
              key={index}
              className="flex flex-col min-h-26 rounded-[1.15rem] gap-3 bg-[#D7D7D7] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]"
            >
              <h3 className="max-w-[19ch] text-[0.9rem] font-black ">
                {card.title}
              </h3>
              <div className="max-w-[22ch] text-[0.9rem]">{card.content}</div>
              <div className="flex font-xsm">
                <span className="">{card.button} </span>
                <span className="text-sm">
                  <ArrowRight></ArrowRight>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="my-18 flex justify-between px-18">
        <div>
          <h2 className="max-w-[13ch] text-[2rem] font-black leading-[0.94] tracking-[-0.06em]">
            Get to know more about Univers
          </h2>
        </div>
        <p className="max-w-104 text-[1.5rem] leading-5 tracking-[-0.08em] font-medium text-(--text-primary)/35">
          We are customer-focused digital bank that provides complete financial
          solutions to meet your entire financial needs.
        </p>
      </div>

      <div className="mt-5 flex gap-5 justify-between px-18">
        {stats.map((stat) => (
          <article
            key={stat.value}
            className="relative group flex flex-col justify-center items-center 
               rounded-[1.15rem] w-60 h-40 bg-[#D7D7D7] px-4 py-4 
               shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] overflow-hidden"
          >
            <div className="z-10 flex flex-col items-center transition-opacity duration-300 group-hover:opacity-0">
              <div className="text-[3rem] font-black tracking-[-0.08em] text-(--text-primary)/80 sm:text-[1.9rem]">
                {stat.value}
              </div>
              <p className="mt-1 text-[1rem] leading-4 text-(--text-primary)">
                {stat.label}
              </p>
            </div>

            <div
              className="absolute inset-0 flex flex-col items-center justify-center 
                   bg-(--color-background) text-(--text-secondary) text-center px-4 
                   transform translate-y-full opacity-0 
                   transition-all duration-300 ease-out 
                   group-hover:translate-y-0 group-hover:opacity-100"
            >
              <div className="text-[3rem] font-black tracking-[-0.08em]">
                {stat.value}
              </div>
              <p className="mt-1 text-[1rem] leading-4">{stat.label}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 px-18">
        <ImpressionSection />
      </div>
      <div className="mt-10 px-18">
        <TransfersSection />
      </div>
    </section>
  );
}
