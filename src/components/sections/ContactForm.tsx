import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, Send, CheckCircle2 } from "lucide-react";

type Status = "idle" | "sending" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle") return;

    setStatus("sending");
    // No email backend is wired up yet — connect a service (e.g. Formspree,
    // EmailJS, or a serverless function) here to actually deliver messages.
    setTimeout(() => setStatus("sent"), 1200);
  }

  const fieldClass =
    "w-full rounded-xl border border-line bg-surface/60 px-4 py-3.5 text-sm text-sand-50 placeholder:text-ink-500 outline-none transition focus:border-spice-400 focus:bg-surface";

  return (
    <form onSubmit={handleSubmit} className="glass flex flex-col gap-4 rounded-3xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder="Your name" className={fieldClass} disabled={status !== "idle"} />
        <input required type="email" name="email" placeholder="Your email" className={fieldClass} disabled={status !== "idle"} />
      </div>
      <input required name="subject" placeholder="Subject" className={fieldClass} disabled={status !== "idle"} />
      <textarea
        required
        name="message"
        placeholder="Tell me a bit about the project..."
        rows={5}
        className={`${fieldClass} resize-none`}
        disabled={status !== "idle"}
      />

      <motion.button
        type="submit"
        disabled={status !== "idle"}
        whileHover={status === "idle" ? { y: -2 } : {}}
        whileTap={status === "idle" ? { scale: 0.98 } : {}}
        className={`mt-2 flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition ${
          status === "sent"
            ? "bg-emerald-500/20 text-emerald-300"
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
      </motion.button>
    </form>
  );
}
