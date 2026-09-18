"use client";

import { useEffect, useRef } from "react";

type SectionFadeProps = React.ComponentPropsWithoutRef<"section">;

export default function SectionFade({
  className = "",
  children,
  ...props
}: SectionFadeProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
       * Give the section a generous entrance/exit zone without allowing
       * nearby narrative sections to visually compete.
       */
      const fadeDistance = viewportHeight * 0.28;

      const enterProgress = Math.min(
        1,
        Math.max(0, (viewportHeight - rect.top) / fadeDistance),
      );

      const exitProgress = Math.min(1, Math.max(0, rect.bottom / fadeDistance));

      const opacity = Math.min(enterProgress, exitProgress);

      section.style.opacity = opacity.toFixed(3);

      const translateY = (1 - opacity) * 18;

      section.style.transform = `translate3d(0, ${translateY}px, 0)`;
    };

    const handleScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`will-change-[opacity,transform] ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
