"use client";

import { useMemo } from "react";
import { useTheme } from "@/components/ThemeProvider";

type Season = "winter" | "spring" | "summer" | "autumn";

const getSeason = (): Season => {
  const month = new Date().getMonth();
  if (month >= 11 || month <= 1) return "winter";
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  return "autumn";
};

const SeasonalEffects = () => {
  const season = useMemo(getSeason, []);
  const { theme } = useTheme();

  const particles = useMemo(() => {
    const count = season === "summer" ? 8 : 20;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${12 + Math.random() * 15}s`,
      size: 8 + Math.random() * 12,
      opacity: 0.4 + Math.random() * 0.4,
    }));
  }, [season]);

  if (season === "winter") {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute top-0 animate-fall"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              opacity: p.opacity,
            }}
          >
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              className={
                theme === "dark"
                  ? "text-white/90 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]"
                  : "text-slate-400 drop-shadow-[0_0_2px_rgba(0,0,0,0.1)]"
              }
            >
              <path
                fill="currentColor"
                d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
              />
            </svg>
          </div>
        ))}
      </div>
    );
  }

  if (season === "spring") {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute animate-fall"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              opacity: p.opacity,
            }}
          >
            <div
              className="rounded-full bg-pink-300"
              style={{ width: p.size, height: p.size * 1.2 }}
            />
          </div>
        ))}
      </div>
    );
  }

  if (season === "summer") {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute animate-float"
            style={{
              left: p.left,
              top: `${Math.random() * 100}%`,
              animationDelay: p.delay,
              animationDuration: `${8 + Math.random() * 8}s`,
              opacity: p.opacity * 0.8,
            }}
          >
            <div
              className="rounded-full bg-amber-200"
              style={{ width: p.size * 1.5, height: p.size * 1.5 }}
            />
          </div>
        ))}
      </div>
    );
  }

  if (season === "autumn") {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute animate-fall"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              opacity: p.opacity,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <svg
              width={p.size * 2}
              height={p.size}
              viewBox="0 0 24 12"
              className="text-amber-600"
            >
              <ellipse cx="12" cy="6" rx="10" ry="5" fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

export default SeasonalEffects;
