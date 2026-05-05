"use client";

import { useEffect, useState, useCallback } from "react";
import { X, Mail, BookOpen, Send, CheckCircle2 } from "lucide-react";

const SESSION_KEY = "leadgate-shown-v1";
const SCROLL_THRESHOLD = 0.5; // 50%
const TIME_THRESHOLD = 30_000; // 30s
const EXIT_INTENT_Y = 10; // px from top before exit-intent fires

type Status = "idle" | "submitting" | "success" | "error";

interface LeadGateProps {
  /** Optional Apps Script / form-handler endpoint. If unset, form just shows a thank-you toast (useful for testing the gate). */
  endpoint?: string;
  /** Title shown at the top of the modal. */
  title?: string;
  /** Subtitle/description. */
  subtitle?: string;
  /** Where to send users who pick "Browse free books". */
  booksHref?: string;
}

export default function LeadGate({
  endpoint,
  title = "Don't leave empty-handed",
  subtitle = "Pick a free book to download, or leave your details so we can stay connected and send you new resources.",
  booksHref = "#library",
}: LeadGateProps) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"choose" | "form">("choose");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const trigger = useCallback(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setOpen(true);
  }, []);

  // Mount triggers
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let armed = true;
    const handleScroll = () => {
      const scrolled =
        window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight);
      if (armed && scrolled >= SCROLL_THRESHOLD) {
        armed = false;
        trigger();
      }
    };
    const handleMouseLeave = (e: MouseEvent) => {
      if (armed && e.clientY < EXIT_INTENT_Y) {
        armed = false;
        trigger();
      }
    };
    const timer = window.setTimeout(() => {
      if (armed) {
        armed = false;
        trigger();
      }
    }, TIME_THRESHOLD);

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [trigger]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          mode: "no-cors", // Apps Script web apps respond with CORS-restricted; no-cors gives opaque response but request still lands
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, source: "190-nations-library", submittedAt: new Date().toISOString() }),
        });
        // With no-cors we can't read status; assume success if no throw.
        void res;
      } else {
        await new Promise((r) => setTimeout(r, 600)); // simulate
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="leadgate-title"
    >
      <div
        className="relative w-full max-w-lg bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl shadow-amber-500/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {status === "success" ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9 text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 font-[family-name:var(--font-playfair)]">
              Thank you!
            </h2>
            <p className="text-gray-300 mb-6">
              We&rsquo;ve received your details. Expect resources from the 190 Nations Office in your inbox soon.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 transition-colors"
            >
              Back to the library
            </button>
          </div>
        ) : view === "choose" ? (
          <div className="p-7 sm:p-8">
            <h2
              id="leadgate-title"
              className="text-2xl sm:text-3xl font-bold text-white mb-2 font-[family-name:var(--font-playfair)]"
            >
              {title}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">{subtitle}</p>

            <div className="grid grid-cols-1 gap-3">
              <a
                href={booksHref}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 p-4 rounded-xl bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                <span className="flex-1 text-left">Browse free books</span>
                <span className="text-xs">▶</span>
              </a>
              <button
                type="button"
                onClick={() => setView("form")}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-amber-500/40 transition-colors"
              >
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="flex-1 text-left">Stay in touch</span>
                <span className="text-xs">▶</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-5 text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              No thanks, let me browse
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-7 sm:p-8">
            <button
              type="button"
              onClick={() => setView("choose")}
              className="text-xs text-gray-500 hover:text-amber-400 transition-colors mb-3"
            >
              ← Back
            </button>
            <h2
              id="leadgate-title"
              className="text-2xl font-bold text-white mb-2 font-[family-name:var(--font-playfair)]"
            >
              Stay in touch
            </h2>
            <p className="text-gray-400 text-sm mb-5">
              Leave your details and we&rsquo;ll send you ministry resources, conference invites, and free books.
            </p>

            <div className="space-y-3">
              <input
                name="name"
                required
                placeholder="Full name"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="country"
                  placeholder="Country"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
                <input
                  name="whatsapp"
                  placeholder="WhatsApp (optional)"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
              </div>
              <input
                name="church"
                placeholder="Church / Ministry (optional)"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
              />
            </div>

            {error && (
              <p className="mt-3 text-xs text-red-400">{error}</p>
            )}

            <p className="mt-4 text-xs text-gray-500 leading-relaxed">
              By submitting, you agree we may contact you about ministry resources. We never share your details with third parties.
            </p>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {status === "submitting" ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send my details
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
