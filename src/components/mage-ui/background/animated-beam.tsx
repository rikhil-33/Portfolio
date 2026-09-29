"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

function Beam({ index }: { index: number }) {
  const isLarge = index % 8 === 0;

  return (
    <div
      style={{
        width: "6px",
        height: "100%",
        animation: `meteor ${isLarge ? "7s" : "11s"} ${index * 0.5}s ease-in-out infinite`,
        transform: "translateY(-20%)",
      }}
    >
      <div
        style={{
          clipPath: "polygon(54% 0, 54% 0, 60% 100%, 40% 100%)",
          width: "100%",
          height: isLarge ? "2rem" : "3rem",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            background:
              "linear-gradient(to bottom, rgba(250,250,250,0.5), #f5f5f5 75%, #f5f5f5)",
          }}
        />
      </div>
    </div>
  );
}

function useGridCount() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setCount(Math.ceil(rect.width / 40));
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return { count, containerRef };
}

function Background() {
  const { count, containerRef } = useGridCount();

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "linear-gradient(to top, #312e81, #1e1b4b)", // indigo-900 → indigo-950
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* Radial glow overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          top: "50%",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          opacity: 0.4,
          background:
            "radial-gradient(50% 50% at 50% 50%, #072a39 0%, rgb(7,42,57) 50%, rgba(7,42,57,0) 100%)",
        }}
      />

      {/* Beam columns */}
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          style={{
            position: "relative",
            height: "100%",
            width: "1px",
            transform: "rotate(12deg)",
            backgroundColor: "rgba(243,244,246,0.1)",
          }}
        >
          {(1 + i) % 4 === 0 && <Beam index={i + 1} />}
        </div>
      ))}
    </div>
  );
}

export default function AnimatedBeam({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ minHeight: "100vh" }}
    >
      <Background />
      <div style={{ position: "relative", zIndex: 10, height: "100%", width: "100%" }}>
        {children}
      </div>
    </div>
  );
}
