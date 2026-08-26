export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-ink-500 sm:flex-row">
        <span>&copy; {new Date().getFullYear()} Serag Mounir. All rights reserved.</span>
        <span>Built with React, TypeScript &amp; Tailwind CSS.</span>
      </div>
    </footer>
  );
}
