interface FilterPillsProps<T extends string> {
  options: readonly T[];
  active: T;
  onChange: (value: T) => void;
  getLabel?: (value: T) => string;
}

export function FilterPills<T extends string>({
  options,
  active,
  onChange,
  getLabel,
}: FilterPillsProps<T>) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
              isActive
                ? "border-spice-400 bg-spice-500/15 text-sand-50"
                : "border-line text-ink-300 hover:border-line-strong hover:text-sand-50"
            }`}
          >
            {getLabel ? getLabel(option) : option}
          </button>
        );
      })}
    </div>
  );
}
