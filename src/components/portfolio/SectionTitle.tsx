type Props = {
  id?: string;
  children: React.ReactNode;
  line?: boolean;
};

export function SectionTitle({ id, children, line = true }: Props) {
  if (!line) {
    return (
      <h2 className="section-title__text section-title__text--solo" id={id}>
        {children}
      </h2>
    );
  }
  return (
    <div className="section-title" id={id}>
      <h2 className="section-title__text">{children}</h2>
      <span className="section-title__line" aria-hidden />
    </div>
  );
}
