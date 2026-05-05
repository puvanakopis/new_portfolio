interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ tag, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-14">
      <p className="section-tag mb-4">{tag}</p>
      <h2
        className=" text-4xl lg:text-5xl font-bold mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg max-w-xl" style={{ color: "var(--text-muted)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
