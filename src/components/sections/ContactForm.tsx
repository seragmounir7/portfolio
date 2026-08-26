import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending" || !formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        "EmailJS is not configured — set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env.local (see .env.example).",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY }).then(
      () => {
        setStatus("sent");
        formRef.current?.reset();
      },
      (err) => {
        console.error("EmailJS send failed:", err);
        setStatus("error");
      },
    );
  }

  const busy = status === "sending" || status === "sent";
  const fieldClass =
    "w-full rounded-xl border border-line bg-surface/60 px-4 py-3.5 text-sm text-sand-50 placeholder:text-ink-500 outline-none transition focus:border-spice-400 focus:bg-surface";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="glass flex flex-col gap-4 rounded-3xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder="Your name" className={fieldClass} disabled={busy} />
        <input required type="email" name="email" placeholder="Your email" className={fieldClass} disabled={busy} />
      </div>
      <input required name="subject" placeholder="Subject" className={fieldClass} disabled={busy} />
      <textarea
        required
        name="message"
        placeholder="Tell me a bit about the project..."
        rows={5}
        className={`${fieldClass} resize-none`}
        disabled={busy}
      />

      <motion.button
        type="submit"
        disabled={busy}
        whileHover={!busy ? { y: -2 } : {}}
        whileTap={!busy ? { scale: 0.98 } : {}}
        className={`mt-2 flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition ${
          status === "sent"
            ? "bg-emerald-500/20 text-emerald-300"
            : status === "error"
              ? "bg-red-500/20 text-red-300"
              : "bg-spice-500 text-void shadow-[0_0_40px_-8px_rgba(224,151,63,0.7)] hover:bg-spice-400"
        }`}
      >
        {status === "idle" && (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
        {status === "sending" && (
          <>
            Sending
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        )}
        {status === "sent" && (
          <>
            Message Sent
            <CheckCircle2 className="h-4 w-4" />
          </>
        )}
        {status === "error" && (
          <>
            Couldn't Send — Try Again
            <AlertCircle className="h-4 w-4" />
          </>
        )}
      </motion.button>
      {status === "error" && !(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) && (
        <p className="text-center text-xs text-ink-500">
          EmailJS isn't configured yet — see .env.example.
        </p>
      )}
    </form>
  );
}
