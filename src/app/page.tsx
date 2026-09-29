import AnimatedBeam from "@/components/mage-ui/background/animated-beam";
import { BoxReveal } from "@/components/mage-ui/text/box-reveal-animation";
import { GridPulse } from "@/components/ui/grid-pulse";

/** Text-shadow halo so lit grid cells don't crowd the letters */
const guard =
  "[text-shadow:0_0_6px_var(--color-background),0_0_14px_var(--color-background),0_0_30px_var(--color-background),0_0_52px_var(--color-background)]";

export default function Home() {
  return (
    <AnimatedBeam className="min-h-screen">
      {/* GridPulse sits between the beam (z-0) and content (z-10) */}
      <GridPulse
        style={{ zIndex: 1 }}
        ambient={3}
        cell={28}
      />
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8">
        {/* Outer wrapper — positions glass + text together, no overflow or filter */}
        <div className="liquid-glass-wrap w-full max-w-2xl">

          {/* Glass pane — owns all blur/border/overflow, sits behind text */}
          <span aria-hidden className="liquid-glass-pane" />

          {/* Text content — floats above the glass, pointer events work normally */}
          <div className="liquid-glass-content">

            {/* Line 1: Hello There! I'm */}
            <BoxReveal boxColor="#6366f1" duration={0.5}>
              <h1
                data-grid-avoid
                className={`text-5xl font-bold text-white leading-tight md:text-6xl ${guard}`}
              >
                Hello There! I&apos;m
              </h1>
            </BoxReveal>

            {/* Line 2: Siripurapu Rikhil. */}
            <BoxReveal boxColor="#6366f1" duration={0.5}>
              <h2
                data-grid-avoid
                className={`text-5xl font-bold text-white leading-tight md:text-6xl ${guard}`}
              >
                Siripurapu Rikhil
                <span className="text-[#818cf8]">.</span>
              </h2>
            </BoxReveal>

            {/* Description */}
            <BoxReveal boxColor="#6366f1" duration={0.5}>
              <p
                data-grid-avoid
                className={`mt-6 max-w-lg text-lg leading-relaxed text-white/85 ${guard}`}
              >
                I&apos;m a second-year Computer Science student who begins with
                real problems, not just ideas. AI is my trusted collaborator
                throughout the process, helping me brainstorm, build, and
                refine until the solution works for the people using it.
                If something frustrates people, I want to fix it.
              </p>
            </BoxReveal>

          </div>
        </div>
      </main>
    </AnimatedBeam>
  );
}
