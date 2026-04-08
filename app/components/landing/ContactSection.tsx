import { ContactFooter } from './ContactFooter';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  return (
    <>
      <section
        id="support"
        className="flex flex-col gap-10  bg-(--text-secondary) px-4 py-8 text-center text-(--text-primary) sm:px-5"
      >
        <p className="text-(--text-muted) ">What are you waiting for</p>
        <h2 className="mx-auto max-w-[15ch] text-[2.65rem] font-black leading-[0.96] tracking-[-0.06em]">
          Make your business spending smarter
        </h2>
        <div className="flex justify-center md:gap-5 gap-2">
          <Button className="rounded-md cursor-pointer   bg-(--bg-primary) px-2 py-2 text-[0.9rem] font-medium text-(--text-primary)">
            Try Revolut business now
          </Button>
          <Button
            variant="outline"
            className="rounded-md cursor-pointer   border-2  px-4 py-2 text-[0.9rem] font-black text-(--text-primary)"
          >
            Contact Sales
          </Button>
        </div>

        <ContactFooter />
      </section>
    </>
  );
}
