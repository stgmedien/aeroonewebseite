import { Button } from "@/components/ui/Button";
import { DroneIcon } from "@/components/ui/Icons";

/** 404 zweisprachig — not-found erhält keine Route-Params. */
export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden px-6 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-72 w-[40rem] max-w-[90%] -translate-x-1/2 rounded-full bg-ember/20 blur-[120px]" />
      <div className="flex flex-col items-center">
        <span className="grid h-16 w-16 place-items-center rounded-2xl glass text-ember animate-float">
          <DroneIcon size={32} />
        </span>
        <p className="mt-8 font-display text-7xl font-extrabold tracking-tight text-gradient sm:text-8xl">404</p>
        <h1 className="mt-3 font-display text-2xl font-bold text-fg sm:text-3xl">
          Diese Seite ist abgehoben.
        </h1>
        <p className="mt-3 max-w-md text-fg-muted">
          Die gesuchte Seite konnte nicht gefunden werden. Vielleicht hilft ein
          Blick von oben – zurück zur Startseite.
        </p>
        <p className="mt-2 max-w-md text-sm text-fg-muted/80">
          This page has taken off — head back to the homepage.
        </p>
        <div className="mt-8">
          <Button href="/" size="lg" arrow>
            Zurück zur Startseite · Back home
          </Button>
        </div>
      </div>
    </section>
  );
}
