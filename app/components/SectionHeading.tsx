import ScrollReveal from "./ScrollReveal";

/** Editorial section header: big italic index, uppercase label, rule line. */
export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <ScrollReveal>
      <div className="flex items-baseline gap-4">
        <span className="section-index text-4xl leading-none sm:text-5xl">
          {index}
        </span>
        <h2 className="section-label text-xs font-bold uppercase sm:text-sm">
          {title}
        </h2>
        <span
          aria-hidden
          className="h-px flex-1 translate-y-[-4px] bg-(--line)"
        />
      </div>
    </ScrollReveal>
  );
}
