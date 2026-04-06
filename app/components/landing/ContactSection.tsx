import { ContactFooter } from "./ContactFooter";

export function ContactSection() {
  return (
    <>
      <section className="flex flex-col gap-10  bg-(--text-secondary) px-4 py-8 text-center text-(--text-primary) sm:px-5">
        <p className="text-(--text-muted) ">What are you waiting for</p>
        <h2 className="mx-auto max-w-[15ch] text-[2.65rem] font-black leading-[0.96] tracking-[-0.06em]">
          Make your business spending smarter
        </h2>
        <div className="flex justify-center gap-5">
          <button className="rounded-md bg-(--bg-primary) px-4 py-2 text-[0.9rem] font-medium text-(--text-primary)">Try Revolut business now</button>
          <button className="rounded-md border-2  px-4 py-2 text-[0.9rem] font-black text-(--text-primary)">Contact Sales</button>
        </div>

        <ContactFooter/>
      </section>
    </>
  );
}
