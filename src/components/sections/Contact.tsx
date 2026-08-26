import { useState } from "react";
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../data/contact";
import { SectionHeading } from "../shared/SectionHeading";
import { ContactForm } from "./ContactForm";

const CONTACT_ROWS = [
  { icon: Mail, label: "Email", value: CONTACT_INFO.email },
  { icon: Phone, label: "Phone", value: CONTACT_INFO.phone },
  { icon: MapPin, label: "City", value: CONTACT_INFO.city },
];

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  function copy(value: string) {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(value);
      setTimeout(() => setCopied((c) => (c === value ? null : c)), 1500);
    });
  }

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-glow-600/15 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact"
          description="Have a project in mind, or just want to talk shop? I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-8">
            <div className="glass flex flex-col divide-y divide-line rounded-3xl">
              {CONTACT_ROWS.map(({ icon: Icon, label, value }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => copy(value)}
                  className="group flex items-center gap-4 p-5 text-left transition hover:bg-surface/50"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-spice-500/10 text-spice-400">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-wide text-ink-500">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium text-sand-50">
                      {value}
                    </span>
                  </span>
                  {copied === value ? (
                    <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4 shrink-0 text-ink-500 opacity-0 transition group-hover:opacity-100" />
                  )}
                </button>
              ))}
            </div>

            <div className="glass rounded-3xl p-6">
              <h4 className="font-display text-lg text-sand-50">Follow me</h4>
              <div className="mt-4 flex gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink-300 transition hover:-translate-y-1 hover:border-spice-400 hover:bg-spice-500/10 hover:text-sand-50"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
