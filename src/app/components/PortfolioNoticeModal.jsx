"use client";

import { useEffect, useMemo, useState } from "react";

export default function PortfolioNoticeModal() {
  const storageKey = useMemo(() => "portfolio_notice_seen_v1", []);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const seen = window.sessionStorage.getItem(storageKey);
    if (!seen) {
      window.sessionStorage.setItem(storageKey, "1");
      setIsOpen(true);
    }
  }, [storageKey]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio notice"
    >
      <button
        aria-label="Close notice"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-[#0b1220] p-6 shadow-2xl">
        <div className="flex items-start gap-3">
          <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-teal-500/15 text-teal-300 flex items-center justify-center border border-teal-400/20">
            <span className="text-lg">i</span>
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold tracking-wide text-teal-300">
              Note
            </p>
            <p className="mt-1 text-white text-lg leading-snug">
              This portfolio does not contain my latest work and updated
              information.{" "}
              <span className="text-teal-300 font-semibold">
                New portfolio is on the way.
              </span>
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-teal-500 px-4 py-2 text-sm font-semibold text-[#07111f] hover:bg-teal-400 transition-colors"
              >
                Got it
              </button>

              <span className="text-xs text-white/50">
                Tip: press ESC to close
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg px-2 py-1 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}


